var Omeros = Omeros || {};

Omeros.Utilities = {
    init: function () {

    },

    getItemsFromList: function (url, onSuccess, onFailure, items) {
        $.ajax({
            async: true,
            url: url,
            type: "GET",
            headers: {
                accept: "application/json;odata=verbose"
            },
            success: function (data) {
                items = items.concat(data.d.results);
                if (data.d.__next) {
                    var url = data.d.__next;
                    Portfolio.Utilities.getItemsFromList(
                        url,
                        onSuccess,
                        onFailure,
                        items
                    );
                } else {
                    onSuccess(items);
                }
            },
            error: function (error) {
                console.log(error);
                if (onFailure);
                onFailure(error);
                Omeros.Utilities.onQueryFailed(error);
            }
        });
    },

    onQueryFailed: function (sender) {
        var securityMsg =
            "The security validation for this page is invalid and might be corrupted. Please use your web browser's Back button to try your operation again.";

        if (
            sender.status === 403 &&
            JSON.parse(sender.responseText).error.message.value === securityMsg
        )
            console.log("Please try again by refreshing the browser.");
        else if (sender.responseText != "" && sender.responseText != null)
            console.log(
                "Request failed. " + JSON.parse(sender.responseText).error.message.value
            );
        else if (sender.statusText != "" && sender.statusText != null)
            console.log("Request failed. " + sender.statusText);
        else console.log("Request failed.");
    },

    isNULL: function (data) {
        if (data == undefined || data == "" || data == null || data == "null")
            return "";
        return data;
    },


};


