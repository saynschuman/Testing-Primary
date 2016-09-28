function WebModal(Name, Url) {

    jQuery('#ModalContent').html('<div id="ModalAjax"><img src="/images/unsorted/modal-loading.gif"></div>');

console.log(Name);
    if ((Name == undefined) || (Url == undefined)) {

        jQuery('#ModalWindow').modal('hide');

    } else {

        jQuery('#ModalWindow').modal('show');
        jQuery('#gridSystemModalLabel').html(Name);

        var Ajax = getAjax(Url, 'ModalContent');
        if (!Ajax) {
            jQuery('#ModalContent').html('<div id="ModalAjax">Loading...</div>');
        }

    }

    jQuery('#ModalAjax').css("text-align", "center");
    jQuery('#ModalAjax').css("padding", "60px 0px");

}

function ViewRedirect(Title, Message, Redirect, Status) {

    swal(Title, Message, Status);
    if (Redirect != "") {
        setTimeout(function () {
            location.href = Redirect
        }, 2000);
    }

}

function VerifyData(Field, Value, Default) {

    if ((Value != "") && (Value != Default)) {
        jQuery('.' + Field + '_verify').show();
        getAjax('/verify/' + Field + '/' + Value + '');
    } else {
        jQuery('.' + Field + '_verify').hide();
    }

}

function Status() {
    return jQuery('input[name=\"confirm\"]:checked').val();
}

function initTableApp(xclass) {
    $('.' + xclass + '').DataTable({
        "aaSorting": false,
        "iDisplayLength": 20,
        "pagingType": "numbers",
        "language": {
            "emptyTable": "Нет данных для отображения",
            "search": "Поиск",
            "infoFiltered": " - отфильровано с _MAX_ записей",
            "info": "Отображение страницы _PAGE_ с _PAGES_ страниц",
            "infoEmpty": "Отображается 0 записей"
        }
    });
}

function Location(url) {
    location.href = url;
}

function PartnerInfo(id) {
    if(id != "") {
        getAjax('/view/partnership?PartnerID='+id+'', 'info_partner');
    }
}