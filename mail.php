<?php
   if(!empty($_POST['name']) and !empty($_POST['phone'])){
      $name = trim(strip_tags($_POST['name']));
  $phone = trim(strip_tags($_POST['phone']));
      $description = trim(strip_tags($_POST['description']));
      mail('high_flying@mail.ru', 'info@vega-proekt.ru',
      'Вам написал: '.$name.'<br />Его телефон: '.$phone.'<br />
      Его сообщение: '.$description,"Content-type:text/html;charset=utf-8");
    
      header("Location:  https://vega-proekt.ru");
      
   }
   else {
      echo "Для отправки сообщения заполните все поля!";
      exit;
   }?>