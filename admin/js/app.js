jQuery(document).ready(function($) {
  $( "#tabs" ).tabs();
  $('#dataTable').DataTable();
  $(`.dialog`).dialog({
    autoOpen: false,
  })

  $(document).on('click', '.btn-dialog', function() {
    $(`#${ $(this).data('target') }`).dialog("open")
  })
});