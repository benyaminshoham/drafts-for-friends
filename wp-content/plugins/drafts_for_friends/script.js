/**
 * Created by benyamin on 9/21/16.
 */

jQuery( document ).ready(function() {
    var cancelButton = jQuery('a.draftsforfriends-extend-cancel');
    jQuery('form.draftsforfriends-extend').hide();
    jQuery('a.draftsforfriends-extend').show();
    cancelButton.show();
    cancelButton.css('display', 'inline');
    window.draftsforfriends = {
        toggle_extend: function(key) {
            jQuery('#draftsforfriends-extend-form-'+key).show();
            jQuery('#draftsforfriends-extend-link-'+key).hide();
            jQuery('#draftsforfriends-extend-form-'+key+' input[name="expires"]').focus();
        },
        cancel_extend: function(key) {
            jQuery('#draftsforfriends-extend-form-'+key).hide();
            jQuery('#draftsforfriends-extend-link-'+key).show();
        }
    };
});
