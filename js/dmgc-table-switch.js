$('.btn-group-vertical label').on('click', function(){
	$(this).siblings().removeClass('active')
	$(this).addClass('active');
})