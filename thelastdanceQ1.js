import { LightningElement, track } from "lwc";

//Importação
//Track: Olhando se a variavel mudou(bindar)
export default class ThelastdanceQ1 extends LightningElement {

	mostra=false;
	@track num1;
	@track num2;
	resultado;

	mudouN1(event){
		this.num1 = Number(event.target.value);
	}
	
    mudouN2(event){
		this.num2 = Number(event.target.value);
	}

	soma(){
        if(isNaN(this.num1 && this.num2)) {
            alert("Por favor, adicione apenas números");
        } else {
            this.resultado = (this.num1 + this.num2);
        }
	}

	sub(){
        if(isNaN(this.num1 && this.num2)) {
            alert("Por favor, adicione apenas números");
        } else {
		this.resultado = (this.num1 - this.num2);
        }
	}

	div(){
        if(isNaN(this.num1 && this.num2)) {
            alert("Por favor, adicione apenas números");
        } else if (this.num2 === 0){
		    alert("Não é possível dividir por 0");
	    } else {
            this.resultado = (this.num1 / this.num2).toFixed(2);
        }
	}

	mult(){
        if(isNaN(this.num1 && this.num2)) {
            alert("Por favor, adicione apenas números");
        } else {
		this.resultado = (this.num1 * this.num2);
        }
	}

    handleClickClear() {

        const inputFields = this.template.querySelectorAll( 
            'lightning-input'
        );

        inputFields.forEach(field => { 
                field.value = null;
                this.resultado = null;
            });
        }
    }



    
