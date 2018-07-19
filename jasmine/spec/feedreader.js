/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

$(function() {
    
    /* Test suite for all the RSS feed definitions,
     * the allFeeds variable in our application.
     */
    
    describe('RSS Feeds', function() {
        
        /* Test to make sure that the allFeeds variable
         * has been defined and that it is not
         * empty.
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /* Test that loops through each feed in the
         * allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('urls are defined', function () {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].url).toBeDefined();
                expect(allFeeds[i].url.length).not.toBe(0);
            }
        })


        /* Test that loops through each feed in the
         * allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('names are defined', function () {
            for (let i = 0; i < allFeeds.length; i++) {
                expect(allFeeds[i].name).toBeDefined();
                expect(allFeeds[i].name.length).not.toBe(0);
            }
        });
    });


    /* Test suite for the menu*/
    describe('The Menu', function() {
        
        /* Test that ensures the menu element is
         * hidden by default.
         */
        it('menu hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        })

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    })
    /* Test suite for initial entries */
    describe('Initial Entries', function () {
        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
    })
    /* Test suite for new feed selection" */
    describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
    })
}());