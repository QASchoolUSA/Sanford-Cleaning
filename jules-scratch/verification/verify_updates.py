from playwright.sync_api import sync_playwright, Page, expect

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()

    # 1. Verify Senior Care Cleaning page (no testimonials)
    page.goto("http://localhost:5173/senior-care-cleaning")
    expect(page).to_have_title("Senior Care Cleaning Services in Sanford, FL | 55+ Communities")
    # Check that the testimonials section is NOT present
    testimonials_section = page.locator('text="What Our Senior Clients Say"')
    expect(testimonials_section).not_to_be_visible()
    page.screenshot(path="jules-scratch/verification/senior_care_no_testimonials.png")

    # 2. Verify Blog page (no newsletter, post from markdown)
    page.goto("http://localhost:5173/blog")
    expect(page).to_have_title("Cleaning Tips & News Blog | Sanford Cleaning")
    # Check that the newsletter section is NOT present
    newsletter_section = page.locator('text="Subscribe to Our Newsletter"')
    expect(newsletter_section).not_to_be_visible()
    # Check that the post from markdown is present
    post_title = page.locator('text="5 Tips for a Cleaner, Healthier Home"')
    expect(post_title).to_be_visible()
    page.screenshot(path="jules-scratch/verification/blog_page_updated.png")

    # 3. Verify individual blog post page
    page.goto("http://localhost:5173/blog/2024-07-26-5-tips-for-a-cleaner-home")
    expect(page).to_have_title("5 Tips for a Cleaner, Healthier Home | Sanford Cleaning Blog")
    post_heading = page.locator('h1:text("5 Tips for a Cleaner, Healthier Home")')
    expect(post_heading).to_be_visible()
    page.screenshot(path="jules-scratch/verification/blog_post_page.png")

    # 4. Verify Decap CMS admin panel
    page.goto("http://localhost:5173/admin/")
    # The title of the admin page is "Content Manager"
    expect(page).to_have_title("Content Manager")
    # We expect to see the Netlify Identity widget
    identity_widget = page.locator('text="Log in with Netlify Identity"')
    expect(identity_widget).to_be_visible()
    page.screenshot(path="jules-scratch/verification/decap_cms_admin.png")

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
