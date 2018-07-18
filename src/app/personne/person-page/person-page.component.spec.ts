import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonnePageComponent } from './person-page.component';

describe('PersonnePageComponent', () => {
    let component: PersonnePageComponent;
    let fixture: ComponentFixture<PersonnePageComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ PersonnePageComponent ]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(PersonnePageComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
