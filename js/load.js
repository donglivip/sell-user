let load='<div class="load" style="position: fixed;top: 0;left: 0;width: 100%;height: 100%;background: rgba(0,0,0,.5);display: flex;align-items: center;justify-content: center;z-index:99999"><img src="img/loading.gif" style="border-radius: 50%;width: 50px;"></div>'
function startload(){
	$('body').append(load)
}
function stopload(){
	$('.load').remove()
}