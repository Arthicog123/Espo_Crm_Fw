export class TasksInfo{
    /**
     * @param {import('playwright').Page} page 
     */
    constructor(page) {
        this.page=page
        this.taskText=page.locator("//div[@data-name='name']/span")
        this.accText=page.locator("//a[@title='Account']")
    }
}