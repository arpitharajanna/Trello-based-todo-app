$(function () {
    function initSortable() {
        $(".column").sortable({
            connectWith: ".column",
            handle: ".header",
//                    cancel: ".header"
//                    placeholder: "portlet-placeholder ui-corner-all"
        });
        $("ul.droptrue").sortable({
            connectWith: "ul"
        });
        $("ul.dropfalse").sortable({
            connectWith: "ul",
//                    dropOnEmpty: false
        });
        $("#sortable1, #sortable2, #sortable3").disableSelection();
    }
    initSortable();
    $(".btn")
            .button()
            .click(function (event) {
                event.preventDefault();
            });
    function addOrder() {
        var valid = true;

        if (valid) {
            selectedList = $('#list').find(":selected").text();
            box = $('div').find("[data-title='" + selectedList + "']");
            boxList = box.find('ul');
            var title = $('#title').val();
            boxList.append("<li class=\"ui-state-highlight\"> <h4>"+ title + "</h4></li>");
            dialog.dialog("close");
        }
        return valid;
    }
    dialog = $("#dialog-form").dialog({
        autoOpen: false,
        height: 380,
        width: 350,
        modal: true,
        buttons: {
            "Create new Card": addOrder,
            Cancel: function () {
                dialog.dialog("close");
            }
        },
        close: function () {
//                        $("#dialog-form")[0].reset();
//                        allFields.removeClass("ui-state-error");
        }
    });
    function addList() {
        bodyWidth = $("body").width();
        nextWidth = bodyWidth + 300;
        $('body').css('width', nextWidth + 'px');
        var listName = $('#listname').val();
        $("div.orders").append("<div class=\"column\">" +
                "<div class=\"box\" data-title=\"" + listName + "\">" +
                "<div class=\"header\">" +
                "    " + listName +
                "</div>" +
                "<div class=\"body\">" +
                "    <ul id=\"sortable3\" class=\"droptrue\">" +
                "    </ul>" +
                "</div>" +
                "</div></div>");
        initSortable();
        dialogList.dialog("close");
    }

    form = dialog.find("form").on("submit", function (event) {
        event.preventDefault();
        addOrder();
    });
    form = dialog.find("#formList").on("submit", function (event) {
        event.preventDefault();
        addList();
    });
    $("#btnCreateNewOrder").button().on("click", function () {
        dialog.dialog("open");
    });
    
    
    //The below script is written to open the modal on click of each task card//
            var modal = document.getElementById('myModal');
// Get the button that opens the modal
            var btn = document.querySelectorAll('.ui-state-highlight');
// Get the <span> element that closes the modal
            var span = document.getElementsByClassName("close")[0];
// When the user clicks the button, open the modal 
            [].forEach.call(btn, function(el) {
            el.onclick = function() {
            modal.style.display = "block";
        }
    })
// When the user clicks on <span> (x), close the modal
        span.onclick = function() {
        modal.style.display = "none";
        }
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
});


