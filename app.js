var check = function (){
    if(document.getElementById('password').value == document.getElementById('passwordConfirm').value){
        document.getElementById('password').classList.remove('error')
        document.getElementById('passwordConfirm').classList.remove('error')
        document.getElementById('message').style.color = 'green';
        document.getElementById('message').innerHTML = '';
      } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').innerHTML = '*Passwords must match';
      }
    }
