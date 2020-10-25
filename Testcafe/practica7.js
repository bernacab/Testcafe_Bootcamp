import page from './pageModel';

fixture('Test con testcafe')
    .page('https://formy-project.herokuapp.com/form');

test('Probando primer formulario', async t =>{
    await t
        .typeText(page.input71, "Bernardo", {speed:0.1})
        .expect(page.input71.value).eql("Bernardo")
        .typeText(page.input72,"Cabrera")
        .expect(page.input72.value).eql("Cabrera")
        .typeText(page.input73, "QC Analyst")
        .expect(page.input73.value).eql("QC Analyst")
        .click(page.rbtn74)
        .expect(page.rbtn74.checked).ok()
        .click(page.rbtn75)
        .expect(page.rbtn75.checked).ok()
        .click(page.rbtn76)
        .expect(page.rbtn76.checked).ok()
        .click(page.checkbox77)
        .expect(page.checkbox77.checked).ok()
        .click(page.checkbox78)
        .expect(page.checkbox78.checked).ok()
        .click(page.checkbox79)
        .expect(page.checkbox79.checked).ok()
        .click(page.smenu701)
        .click(page.opt702)
        .typeText(page.date703, "10222020")
        .click(page.btn704)

        await t
            .expect(page.text705.visible).ok()

});