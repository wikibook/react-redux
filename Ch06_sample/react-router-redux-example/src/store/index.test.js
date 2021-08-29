const index = require("./index")
// @ponicode
describe("index.default", () => {
    test("0", () => {
        let callFunction = () => {
            index.default("http://www.croplands.org/account/confirm?t=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.default("http://example.com/showcalendar.html?token=CKF50YzIHxCTKMAg")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.default("https://twitter.com/path?abc")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.default("http://www.example.com/route/123?foo=bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.default("ponicode.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.default(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
