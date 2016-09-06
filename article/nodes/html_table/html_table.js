var _ = require('underscore');
var Document = require('../../../substance/document');
var Composite = Document.Composite;

// Lens.Speech
// -----------------
//

var HTMLTable = function (node, doc) {
    Composite.call(this, node, doc);
};

// Type definition
// -----------------
//

HTMLTable.type = {
    "id": "html_table",
    "parent": "content",
    "properties": {
        "source_id": "string",
        "label": "string",
        "children": ["array", "paragraph"],
        "footers": ["array", "string"],
        "caption": "caption"
    }
};

HTMLTable.config = {
    "zoomable": true
};


// This is used for the auto-generated docs
// -----------------
//

HTMLTable.description = {
    "name": "HTMLTable",
    "remarks": [
        "A table figure which is expressed in HTML notation"
    ],
    "properties": {
        "source_id": "string",
        "label": "Label shown in the resource header.",
        "title": "Full table title",
        "content": "HTML data",
        "footers": "HTMLTable footers expressed as an array strings",
        "caption": "References a caption node, that has all the content"
    }
};


// Example HTMLTable
// -----------------
//

HTMLTable.example = {
    "id": "html_table_1",
    "type": "html_table",
    "label": "HTMLTable 1.",
    "title": "Lorem ipsum table",
    "content": "<table>...</table>",
    "footers": [],
    "caption": "caption_1"
};

HTMLTable.Prototype = function () {
    this.getChildrenIds = function () {
        return this.properties.children;
    };

    this.getCaption = function () {
        if (this.properties.caption) return this.document.get(this.properties.caption);
    };

    this.getHeader = function () {
        return this.properties.label;
    };
};

HTMLTable.Prototype.prototype = Composite.prototype;
HTMLTable.prototype = new HTMLTable.Prototype();
HTMLTable.prototype.constructor = HTMLTable;

Document.Node.defineProperties(HTMLTable);

module.exports = HTMLTable;
