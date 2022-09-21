import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';

@Component({
  template: `<button (click)="doStuff()">Click</button>`
})
class MyComponent {
  doStuff() {
    throw new Error('doStuff produced this error');
  }
}

describe('MyComponent', () => {
  it('should create the app', () => {
    TestBed.configureTestingModule({declarations: [MyComponent]});
    const fixture = TestBed.createComponent(MyComponent);

    const button = fixture.nativeElement.querySelector('button')!;
    button.click();
    fixture.detectChanges();

    // any valid assertion
    expect(1).toEqual(1);
  });
});