import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import {URLService} from '../url.service'

@Component({
  selector: 'app-url-input',
  templateUrl: './url-input.component.html',
  styleUrls: ['./url-input.component.css']
})

  
  export class UrlInputComponent implements OnInit{
  
    link = ''
    flag: any;

  constructor(public urlService: URLService ) {this.flag = 'default'}
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  
  onGivenLink(form:NgForm) {
    if(form.value.custom == 'default') {
      this.urlService.onLinkSent(form.value.link)
      .subscribe(data => {
      this.link = 'localhost:3000/'+data.hash
        })
      }

    else {
      this.urlService.onCustomLinkSent(form.value.link, form.value.customString)
      .subscribe(data => {
      this.link = 'localhost:3000/'+data.hash
        })
      }
      form.resetForm()
    }
  }

  
  


  
