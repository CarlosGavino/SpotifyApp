import { Component, ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { ImgBrokenDirective } from './img-broken.directive';

// necesitamos un componente de prueba

@Component({
  template: `<img class="img-test" appImgBroken [src]="srcMock">`
})

class TestComponent{
  public srcMock: any = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png';

}

describe('ImgBrokenDirective', () => {

  let Component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;

  beforeEach(()=>{
    TestBed.configureTestingModule({
      declarations: [
        TestComponent,
        ImgBrokenDirective
      ]
    })
    fixture = TestBed.createComponent(TestComponent);
    Component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const elMockElement = new ElementRef('')
    const directive = new ImgBrokenDirective(elMockElement);
    expect(directive).toBeTruthy();
  });

  it('TestComponent debería instanciarse correctamente', ()=>{
 expect(Component).toBeTruthy();
  })

  it('Directiva debería cambiar la imagen por otra', (done: DoneFn)=>{
    const beforeImgElement = fixture.debugElement.query(By.css('.img-test')).nativeElement;
    const beforeImgSrc = beforeImgElement.src;

    Component.srcMock = undefined

    setTimeout(()=>{
      const afterImgElement = fixture.debugElement.query(By.css('.img-test')).nativeElement;
      const afterImgSrc = afterImgElement.src;

      expect(afterImgSrc).toEqual('https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png')
    done();
    
    }, 3000)
  })
});
