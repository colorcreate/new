$(document).ready(function(){
    		$("#tes").click(function(){
    			var result = prime(parseInt($("#number").val()));
    			if (result==0){
    				result = composite(parseInt($("#number").val()));
    			}
    			else {
    				result = "It's Prime Number";
    			}
        		$("#result").text(result);
    		});



    		function composite(number){
    			var result = [];
    			
    			var n=number;
    			for (var i=2; i<number; i++){
    				
    				if (n%i==0) {
    					result.push(i);
    					// alert(i + " "+n + "-");
    				}
    				while (n%i==0) {
    					n/=i;
    					// alert("while");
    				}
    			}

    			var a = "[ "
    			for (var i=0; i<result.length-1; i++){

    				a = a + result[i] + ", ";
    			}
    			a = a + result[i] + " ]";
    			return "It's Composite Number with set of prime factor is "+a;


    		};

    		function prime(a){
    			var b = 0;
    			if (a==2){
    				var result = 1;
    			}
    			else if (a%2==0){
    				var result = 0;
    			}
    			else {
    				for (var i=3; i<a; i++)
    				{
    					if (a%i==0) {
    						b++;
    					}
    				}
    				if (b==0) var result = 1;
    				else var result = 0;
    			}

    			return result;
    		}
		});