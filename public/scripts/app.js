// IIFE
(function () {
  function start() {
    console.log('App Started');

    $('#confModel').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget); // Button that triggered the modal
      var id = button.data('id'); // Extract info from data-* attributes
      var href = '/survey-list/delete/' + id;
      console.log(href);
      var modal = $(this);
      modal.find('.modal-footer .delete_confirm').attr('href', href);
    });
  }
  window.addEventListener('load', start);

  /* --------------- script for dynamic question field generator -------------- */
  $(document).on('click', '#add-question', function () {
    // get the last DIV which ID starts with ^= "question"
    var divQuestion = $('div[id^="question"]:last');

    // remove button
    var removeButton =
      '<button class="btn btn-sm btn-danger" type="button" id="remove-question"> <i class="fas fa-trash "></i> Remove Question</button>';

    // stripout remove btn from cloned row
    var divQuestionhtml = divQuestion.html().replace(removeButton, '');

    // Read the Number from that DIV's ID (i.e: 1 from "question1")
    // And increment that number by 1
    var num = parseInt(divQuestion.prop('id').match(/\d+/g), 10) + 1;

    // Clone it and assign the new ID (i.e: from num 4 to ID "question4")
    var question = divQuestion
      .clone()
      .prop('id', 'question' + num)
      .html(divQuestionhtml);

    // for each of the inputs inside the dive, clear it's value and
    // increment the number in the 'name' attribute by 1
    question.find('input#inputQuestion').each(function () {
      this.value = '';
      let name_number = this.name.match(/\d+/g);
      name_number++;
      this.name = this.name.slice(0, -1) + name_number;
      this.placeholder = this.placeholder.slice(0, -1) + name_number;
    });

    question.find('.choice').each(function () {
      if (this.childElementCount > 1) {
        $(this).closest('.choice').remove();
      }
    });

    question.find('label').each(function () {
      let name_number = this.innerHTML.match(/\d+/g);
      name_number++;
      this.innerHTML = this.innerHTML.slice(0, -1) + name_number;
    });

    // Finally insert question after the last div
    divQuestion.after(question.prepend(removeButton));
  });

  /*
   * add question
   */

  $(document).on('click', '#add-choice', function () {
    // get the last DIV which ID starts with ^= "inputChoice"
    var divChoice = $(this)
      .closest('.question')
      .find('div[id^="inputChoice"]:last');

    // remove button
    var removeButton =
      '<button class="btn btn-sm btn-danger" type="button" id="remove-choice"> <i class="fas fa-trash "></i></button>';

    // stripout remove btn from cloned row
    var divChoicehtml = divChoice.html().replace(removeButton, '');

    // Read the Number from that DIV's ID (i.e: 1 from "inputChoice1")
    // And increment that number by 1
    var num = parseInt(divChoice.prop('id').match(/\d+/g), 10) + 1;

    // Clone it and assign the new ID (i.e: from num 4 to ID "inputChoice4")
    var choice = divChoice
      .clone()
      .prop('id', 'inputChoice' + num)
      .html(divChoicehtml);

    // for each of the inputs inside the dive, clear it's value and
    // increment the number in the 'name' attribute by 1
    choice.find('input#inputChoice').each(function () {
      this.value = '';
      let name_number = this.name.match(/\d+/g);
      name_number++;
      this.name = this.name.slice(0, -1);
      this.name = this.name + name_number;
    });

    // Finally insert choice after the last div
    divChoice.after(choice.append(removeButton));
  });

  /*
   * remove question
   */
  $(document).on('click', '#remove-question', function () {
    $(this).closest('.question').remove();
  });

  /*
   * remove choice
   */
  $(document).on('click', '#remove-choice', function () {
    $(this).closest('.choice').remove();
  });
})();
