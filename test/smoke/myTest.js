const sel = require ('../../data/selectors.json');
const data = require ('../../data/testData.json');
const inputValues4 = require ('../../helpers/inputValues4.js');
const inputValues4andClick = require ('../../helpers/inputValues4andClick.js');
const inputValueAge = require ('../../helpers/inputValueAge.js');

describe('Checking the main functionality', function () {

        it('TC-034 Age accepts upper board integer', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM1);
            const age1 = +$(sel.age).getValue();
            expect(age1).toEqual(data.ageM1);
        });

        it('TC-035 Age accepts upper board integer', function () {
            browser.url('');
            inputValueAge(data.ageM2);
            const age1 = +$(sel.age).getValue();
            expect(age1).toEqual(data.ageM2);
        });

        it('TC-036 Functionality of increasing spinner', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM3);
            $$(sel.ageArrow)[0].click();
            const age1 = +$(sel.age).getValue();
            expect(age1).toEqual(data.ageM4);
        });

        it('TC-037 Functionality of decreasing spinner', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM3);
            $$(sel.ageArrow)[1].doubleClick();
            const age2 = +$(sel.age).getValue();
            expect(age2).toEqual(data.ageM6);
        });

        it('TC-038 Functionality of increasing spinner', function () {
            browser.url('');
            $$(sel.ageArrow)[0].click();
            const age1 = +$(sel.age).getValue();
            expect(age1).toEqual(data.ageM5);
        });

        it('TC-041  doesnt accept negative integer', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM11);
            browser.pause(1000);
            const error = $(sel.ageError).isExisting();
            expect(error).toEqual(true);
        });

        it('TC-042   doesnt accept fractional number', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM12);
            browser.pause(1000);
            const error = $(sel.ageError).isExisting();
            expect(error).toEqual(true);
        });

        it('TC-043  doesnt accept integer greater than 12 symbols', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM7);
            browser.pause(1000);
            const error = $(sel.ageError).isExisting();
            expect(error).toEqual(true);
        });

        it('TC-044  spinner doesnt let go over 12 symbols', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM8);
            $$(sel.ageArrow)[0].click();
            browser.pause(1000);
            const error = $(sel.ageError).isExisting();
            expect(error).toEqual(true);
        });

        it('TC-045  spinner doesnt allow to go lower than 1 in age', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM9);
            $$(sel.ageArrow)[1].click();
            browser.pause(1000);
            const error = $(sel.ageError).isExisting();
            expect(error).toEqual(true);
        });

        it('TC-046  age field doesnt accept 0', function () {
            browser.url('');
            const input = $(sel.age).setValue(data.ageM10);
            browser.pause(1000);
            const error = $(sel.ageError).isExisting();
            expect(error).toEqual(true);
        });

});



/*
        it('TC-bonus Age accepts middle integer full site check', function () {
        browser.url('');
        inputValues4andClick(data.name, data.gender.she, data.ageM2, data.storyType);
        const btn = $(sel.tryAgain).isDisplayed();
        expect(btn).toEqual(true);
    });
 */

