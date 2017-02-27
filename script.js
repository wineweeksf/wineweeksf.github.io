(function() {
  var successSubmit = function() {
    swal({
      title: "Email Submitted!",
      text: "We'll keep you in the loop on the exciting updates for Wine Week 2017!",
      imageUrl: "monocle.png",
      confirmButtonText: "Thanks, I'm excited for wine!"
    });
  }

  var submitEmailModal = function() {
    var userEmail;
    userEmail = $('#email').val();
    console.log(userEmail);
    $.ajax({
      url: "https://docs.google.com/forms/d/e/1FAIpQLSfd2ElRJ-lPsB_a85Ti5MZZkr-mYniOkxgUNpxNxdCqYYv26A/viewform",
      data: {"entry.1408911900": userEmail},
      type: "POST",
      dataType: "xml",
      success: function(formRespnse) {
        console.log(formRespnse);
        successSubmit();
      },
      error: function(err) {
        console.log(err);
        successSubmit();
      }
    });
  }

  $('#submit-email').on('click', function(e)  {
    e.preventDefault();
    e.stopPropagation();
    ga('send', 'event', 'Email Form', 'submit');

    submitEmailModal();
  });
})();
