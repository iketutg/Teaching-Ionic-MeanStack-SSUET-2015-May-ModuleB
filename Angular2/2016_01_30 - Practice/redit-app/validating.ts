import { Component } from 'angular2/core';
import { FORM_DIRECTIVES, ControlGroup, AbstractControl, FormBuilder, Validators } from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    
    selector : 'validating',
    template : `
    
    <h1>Form Validation<h1>
    
    <form  [ngFormModel] = 'cg' (ngSubmit) = 'onSubmit(cg.value)' class = "form-inline">
    
    <div class = "form-group" 
    [class.has-error] = "!input1.valid && input1.touched"
    [class.has-success] = "input1.valid && input1.touched"
    >
    <lable>Name</lable>
    <input type = 'text' [ngFormControl] = 'input1' class = "form-control" #j/>
    {{j}}
    </div>
    
    
    <div class = "form-group" [class.has-error] = "!input2.valid && input2.touched"
    [class.has-success] = "input2.valid && input2.touched"
    >
    <lable>Last Name:</lable>
    <input type = 'text' [ngFormControl] = 'input2' class = "form-control"  #i />
    {{i}}
    </div>
    
    <button type = 'submit'>Submit</button>
    </form>
    
    `,
    directives : [FORM_DIRECTIVES]
    
})
export class validating{
    
    //for binding
    cg : ControlGroup;
    ac : AbstractControl;
    
    //dependency inj.
    constructor(fb : FormBuilder){
        this.cg = fb.group({
            'input1' : ['ABC', Validators.required],
            'input2' : ['DEF', Validators.required]
        });
        
        this.ac = this.cg.controls['ac']
        
    }
    //what about 2 values
    onSubmit(value : any){
        console.log('onSubmit Function called' + value)
    }
}
bootstrap(validating)