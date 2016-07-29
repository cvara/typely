
import $ from 'jquery';
import jQuery from 'jquery';
import rangy from 'rangy-core';



const helper = {};

/**
 *	Gets element by id
 */
helper.gEBI = function(id) {
    return document.getElementById(id);
};


/**
 *	Returns cursor position within given element
 *	NOTE: can count special html characters (inside tags) as well
 */
helper.getCaretCharacterOffsetWithin = function(element, countHtml) {

	var caretOffset = 0;

	var range = rangy.getSelection().getRangeAt(0);
	var preCaretRange = range.cloneRange();
	preCaretRange.selectNodeContents(element);
	preCaretRange.setEnd(range.endContainer, range.endOffset);

	if(countHtml) {
		caretOffset = preCaretRange.toHtml().length;
	}
	else {
		caretOffset = preCaretRange.toString().length;
	}

	return caretOffset;
};


/**
 *	Checks if cursor is positioned at end of given element
 */
helper.carretAtEndOfElement = function(element) {

	return helper.getCaretCharacterOffsetWithin(element,true) === element.innerHTML.length;
};


/**
 *	Checks if cursor is positioned at start of given element
 */
helper.carretAtStartOfElement = function(element) {

	return helper.getCaretCharacterOffsetWithin(element,false) === 0;
};

/**
 *	Returns current selection coordinates
 *	NOTE: the coordinates belong to its left and right boundaries
 */
helper.calculateSelectionCoordinates = function() {

	var savedSel = rangy.saveSelection();

	var startMarkerEl = document.getElementById(savedSel.rangeInfos[0].startMarkerId);
	var endMarkerEl = document.getElementById(savedSel.rangeInfos[0].endMarkerId);

	startMarkerEl.style.display = 'inline';
	endMarkerEl.style.display = 'inline';

	var startCoords = $(startMarkerEl).offset();
	var endCoords = $(endMarkerEl).offset();

	rangy.removeMarkers(savedSel);

	return { start: { x:startCoords.left, y:startCoords.top }, end: { x:endCoords.left, y:endCoords.top } };
};


/**
 *	Moves cursor to end of given contentEditable element
 */
helper.setEndOfContenteditable = function(contentEditableElement) {
	var range,selection;

	range = rangy.createRange();//Create a range (a range is like the selection but invisible)
	range.selectNodeContents(contentEditableElement);//Select the entire contents of the element with the range
	range.collapse(false);//collapse the range to the end point. false means collapse to end rather than the start
	selection = rangy.getSelection();//get the selection object (allows you to change selection)
	selection.removeAllRanges();//remove any selections already made
	selection.addRange(range);//make the range you have just created the visible selection

};


/**
 *	Rangy helper functions
 */
helper.getSelectionText = function() {
    return rangy.getSelection().getRangeAt(0);
};


helper.getSelectionHtml = function() {
    return rangy.getSelection().toHtml();
};


helper.inspectSelection = function() {
    console.info(rangy.getSelection().inspect());
};


helper.deleteSelection = function() {
    rangy.getSelection().deleteFromDocument();
};


helper.collapseSelectionToStart = function() {
    rangy.getSelection().collapseToStart();
};


helper.collapseSelectionToEnd = function() {
    rangy.getSelection().collapseToEnd();
};


var getFirstRange = helper.getFirstRange = function() {
    var sel = rangy.getSelection();
    return sel.rangeCount ? sel.getRangeAt(0) : null;
};


helper.showContent = function(frag) {
    var displayEl = helper.gEBI('selectioncontent');
    var codeEl = helper.gEBI('code');
    while (displayEl.firstChild) {
        displayEl.removeChild(displayEl.firstChild);
    }
    if (frag) {
        displayEl.appendChild(frag);
    }
    codeEl.value = displayEl.innerHTML;
};


helper.inspectRange = function() {
    var range = getFirstRange();
    if (range) {
        alert(range.inspect());
    }
};


helper.reportRangeHtml = function() {
    var range = getFirstRange();
    if (range) {
        alert(range.toHtml());
    }
};


helper.extractRange = function() {
    var range = getFirstRange();
    if (range) {
        helper.showContent(range.extractContents());
    }
};


helper.cloneRange = function() {
    var range = getFirstRange();
    if (range) {
        helper.showContent(range.cloneContents());
    }
};


helper.deleteRange = function() {
    var range = getFirstRange();
    if (range) {
        range.deleteContents();
    }
};


helper.surroundRangeWith = function(tagName) {
    var range = getFirstRange();
    if (range) {
        var el = document.createElement(tagName);
        try {
            range.surroundContents(el);
        } catch(ex) {
            if ((ex instanceof rangy.RangeException || Object.prototype.toString.call(ex) === '[object RangeException]') && ex.code === 1) {
                alert('Unable to surround range because range partially selects a non-text node. See DOM Level 2 Range spec for more information.\n\n' + ex);
            } else {
                alert('Unexpected errror: ' + ex);
            }
        }
    }
};

helper.insertNodeAtRange = function() {
    var range = getFirstRange();
    if (range) {
        var el = document.createElement('span');
        el.style.backgroundColor = 'lightblue';
        el.style.color = 'red';
        el.style.fontWeight = 'bold';
        el.appendChild(document.createTextNode('**INSERTED NODE**'));
        range.insertNode(el);
        rangy.getSelection().setSingleRange(range);
    }
};

helper.getSelectionParentElement = function() {
	var range = rangy.getSelection().getRangeAt(0);
	var parentEl = range.commonAncestorContainer;
	if (parentEl.nodeType !== 1) {
		parentEl = parentEl.parentNode;
	}
	return parentEl;
};


helper.getSelectionBoundaryElement = function(isStart) {
	var range, sel, container;
	if (document.selection) {
	    range = document.selection.createRange();
	    range.collapse(isStart);
	    return range.parentElement();
	} else {
	    sel = window.getSelection();
	    if (sel.getRangeAt) {
	        if (sel.rangeCount > 0) {
	            range = sel.getRangeAt(0);
	        }
	    } else {
	        // Old WebKit
	        range = document.createRange();
	        range.setStart(sel.anchorNode, sel.anchorOffset);
	        range.setEnd(sel.focusNode, sel.focusOffset);

	        // Handle the case when the selection was selected backwards (from the end to the start in the document)
	        if (range.collapsed !== sel.isCollapsed) {
	            range.setStart(sel.focusNode, sel.focusOffset);
	            range.setEnd(sel.anchorNode, sel.anchorOffset);
	        }
	   }

	    if (range) {
	       container = range[isStart ? 'startContainer' : 'endContainer'];

	       // Check if the container is a text node and return its parent if so
	       return container.nodeType === 3 ? container.parentNode : container;
	    }
	}
};


helper.selectElementContents = function(el) {
	var range = document.createRange();
	range.selectNodeContents(el);
	var sel = window.getSelection();
	sel.removeAllRanges();
	sel.addRange(range);
};


export default helper;
