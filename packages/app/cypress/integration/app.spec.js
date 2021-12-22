describe('Navigation', () => {
	it('should navigate to the about page', () => {
		const userRole = 'SystemAdmin';
		let userEmail = 'sunny@test.com';
		if (userRole == 'SystemAdmin') {
			userEmail = 'rahul.kondapally@test.com';
		}

		// Start from the index page
		cy.visit('http://localhost:3000/');

		// Fill login email with invalid email and see whether we are getting invalid msg or not
		cy.get('#input_email').type('rahul.kondapally@test.co');
		cy.get('#login_submit').click();
		cy.get('#login-error'); // This confirms that there is invalid details msg

		// Fill login email and submit
		cy.get('#input_email').clear();
		cy.get('#input_email').type(userEmail);
		cy.get('#login_submit').click();

		// Find a card with card-id my_accounts and click it and verify it includes "/my_accounts"
		cy.get('div[card-id="my_accounts"]').click();
		cy.url().should('include', '/my_accounts');

		if (userRole == 'SystemAdmin') {
			cy.get('button[id="add-partner"]');
			cy.get('button[id="add-role"]');
		}

		// Back to dashboard page
		cy.get('div[id="header-logo"]').click();

		// Find a card with card-id reports and click it and verify it includes "/reports"
		cy.get('div[card-id="reports"]').click();
		cy.url().should('include', '/reports');

		// Back to dashboard page
		cy.get('div[id="header-logo"]').click();

		// Find a card with card-id knowledge_center and click it and verify it includes "/knowledge_center"
		cy.get('div[card-id="knowledge_center"]').click();
		cy.url().should('include', '/knowledge_center');

		// Back to dashboard page
		cy.get('div[id="header-logo"]').click();

		// Find a card with card-id community_forum and click it and verify it includes "/community_forum"
		cy.get('div[card-id="community_forum"]').click();
		cy.url().should('include', '/community_forum');

		// Back to dashboard page
		cy.get('div[id="header-logo"]').click();
	});
});
