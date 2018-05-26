$('.submit').click(function(){
  if($('.email').val()==""){
    $('#done').text(`請輸入報名信箱`)
    return;
  }
  $('.mask').fadeIn()
  
  $.ajax({
  type: 'POST',
  url: "https://www.thef2e.com/api/isSignUp",
  data:
    {
      "email": $('.email').val()
    },
    success:function(data){
      var date = new Date(data.timeStamp)
      var m = date.getMonth()
      var y = date.getFullYear()
      var d = date.getDate()
      if(data.success){
        //console.log(`綽號:${data.nickName},報名時間:${date}`)
        $('#done').text(`查詢結果：${data.message}`)
        $('#name').text(`姓名：${data.nickName}`)
        $('#time').text(`報名時間：${y}-${m+1}-${d}`)
        }
      else{
        $('#done').text(`查詢結果：${data.message}`)
      }
    },complete:function(){
      $('.mask').delay(500).fadeOut();
    }
  })
  })

$.ajax({
  url: 'https://www.thef2e.com/api/signUpTotal',
  type: 'get'
}).done((data)=>{
  $('.total').text(`目前報名人數:${data.total}人`)
}).fail((err)=>{
  console.log('err')
})