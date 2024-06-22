
class DeelPage {

    constructor(page) {
        this.page = page;
        this.roleField= page.getByPlaceholder('Select a role');
        this.countryField= page.getByPlaceholder('Select a country');
        this.searchField= page.getByRole('button', { name: 'Search' });
        this.sectionSalaryBox = page.getByText('Refine your view');
    }

    enterTextInRole = async (role) => {
        await this.roleField.pressSequentially(role, { delay: 500 });
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');
      }

    enterTextInCountry = async (count) => {
        await this.countryField.pressSequentially(count, { delay: 500 });
        await this.page.keyboard.press('ArrowUp');
        await this.page.keyboard.press('Enter');
    }

    clickSearchBtn = async (count) => {
        await this.searchField.click();
    }

    verifySalarySection = async () => {
        return this.sectionSalaryBox;
      }

}

module.exports = DeelPage;

