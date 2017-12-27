var MyPalette = function(colSize, rowSize, targetDomId){
    //private fields
    var _cells = [];
    var _targetDom = null;
    var _cell_width = 16;
    var counter = 0;

    //private functions;

    var init = function() {
        _targetDom = document.querySelector(targetDomId);
        _targetDom.style.width = colSize * _cell_width + colSize + 1 + 'px';

        for(var i = 0; i < rowSize; i++ ){
            for(var j = 0; j < colSize; j++){
                var el = document.createElement('div');
                el.classList.add('cell');
                el.style.width = _cell_width + 'px';
                el.style.height = _cell_width + 'px';
                el.setAttribute('data-type', 'cell');
                el.style.backgroundColor = randomColor();
                _targetDom.appendChild(el);


            }

        }

    };

    var bindClickEvent = function() {
        _targetDom.addEventListener('click', function(e){
            var target = e.target;
            var type = target.dataset.type;
            var color;
            if(type === 'cell'){
                color = target.style.backgroundColor;
                alert(color)
            }



        })
    }

    var randomColor = function(){
        var ret = '#', min = 0, max = 16, len = 6;

        for(var i = min; i < len; i++){
            ret += Math.floor(Math.random() * (max - min)).toString(max);
        }



        return ret;
    }

    init();
    bindClickEvent();


}

var newOne = MyPalette(16, 16, '#palette');
var newOne = MyPalette(16, 16, '#palette2');

//var a = new MyPalette();
//var b = new MyPalette();
//console.log(a.getCounter())
//console.log(b.getCounter())

