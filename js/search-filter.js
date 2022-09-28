 //Filter Search
 function searchContent() {
    const input = document.getElementById('myInput');
    const filter = input.value.toUpperCase();
    const cardList = document.getElementById('card-list');
    const content = cardList.getElementsByClassName('isi-content');

    for (let i = 0; i < content.length; i++) {
        let title = content[i].querySelector('.card-blog .card-body .post-title ');
          if (title.innerText.toUpperCase().indexOf(filter) > -1) {
            content[i].style.display = "";           
          }
          else {         
            content[i].style.display = "none";
            
          }
    }
  }