export class ContactsInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.conText=page.locator("//div[@class='field' and @data-name='name']")
        this.accText=page.locator("//div[@class='field' and @data-name='accounts']//a")
        this.actIcon=page.locator("//div[@data-name='activities']//button[@data-toggle='dropdown']")
        //this.meetLink=page.getByRole('link',{name:'Schedule Meeting'})
        this.meetLink=page.getByText('Schedule Meeting')
        this.meetNameTF=page.locator("//input[@data-name='name']")
        this.meetText=page.locator("//span[@data-name='name']/a[contains(@href,'Meeting/view')]")
        this.meetSaveBtn=page.getByRole('button',{name:'Save'}).last()
    }

    async actClick(){
        await this.actIcon.click()
    }

    async meetClick(){
        await this.meetLink.click()
    }

    async sheduleMeet(meetName){
        await this.meetNameTF.fill(meetName)
        await this.meetSaveBtn.click()
    }
}