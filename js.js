let _text = document.getElementById('InputLine')
let _output = document.getElementById('Output')

let _max = document.getElementById('Max')
let _boxMax = document.getElementById('boxMax')

let _min = document.getElementById('Min')
let _boxMin = document.getElementById('boxMin')

let _loop = document.getElementById('Loop')
let _parity = document.getElementById('Parity')

let Arr = []
let text = ''

setInterval(()=>{
    if(_text.value != null){
        text = _text.value

        let num = ''
        let rec = true
        for(let i = 0; i<text.length; i++){
            if(text[i] != ' ' || i == text.length-1 || text[i] != '-'){
                rec = true
            }
            if(text[i] == '-'){
                rec = true
            }
            if(text[i] == ' ' || i == text.length-1){
                if(i == text.length-1){
                    num += text[i]
                }
                rec = false
                Arr.push(Number(num))
                num = ''
            }
            if(rec){
                num += text[i]
            }
        }



        console.log(_boxMax.value)
        let oldArr = Arr
        let newArr = []

        if(_boxMax.checked == true){
            newArr = oldArr.filter((n)=>{
                return n <= Number(_max.value)
            })
            oldArr = newArr
            newArr = []
        }
        if(_boxMin.checked == true){
            newArr = oldArr.filter((n)=>{
                return n >= Number(_min.value)
            })
            oldArr = newArr
            newArr = []
        }
        if(_loop.checked == true){
            newArr = oldArr.filter(function(item, pos) {
                return oldArr.indexOf(item) == pos;
            })

            oldArr = newArr
            newArr = []
        }
        if(_parity.checked == true){
            newArr = oldArr.filter((n)=>{
                if(n%2 == 0){
                    return n
                }
            })
            oldArr = newArr
            newArr = []
        }

        _output.innerHTML = oldArr


        newArr = []
        oldArr = []
        Arr = []
    }
    
},100)