from playwright.sync_api import sync_playwright

def verify_feature(page):
    page.goto("http://localhost:4173")
    page.wait_for_timeout(2000)

    # Focus language select
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.keyboard.press("Tab")
    page.wait_for_timeout(1000)
    page.screenshot(path="focus_lang.png")

    # Focus data saver
    page.keyboard.press("Tab")
    page.wait_for_timeout(1000)
    page.screenshot(path="focus_data_saver.png")

    # Focus dark mode
    page.keyboard.press("Tab")
    page.wait_for_timeout(1000)
    page.screenshot(path="focus_dark_mode.png")


if __name__ == "__main__":
    with sync_playwright() as p:
        browser = p.chromium.launch()
        context = browser.new_context(viewport={"width": 1280, "height": 720})
        page = context.new_page()
        try:
            verify_feature(page)
        except Exception as e:
            print(f"Error: {e}")
        finally:
            context.close()
            browser.close()
