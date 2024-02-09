// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
// ORG
  it("should have a key called 'organization' with the value 'nonprofit'", function() {
		expect(launchcode.organization).toEqual('nonprofit');
	});
  // EXE
  it("should have a key called 'executiveDirector' with the value of 'Jeff'",
  function(){
    expect(launchcode.executiveDirctor).toEqual("Jeff")
  });
  // percentage
  it("should have a key called 'percentageCoolEmployees' with the value of 100", function(){
    expect(launchcode.percentageCoolEmployees).toEqual("100")
  });
// programsOffered
  it('should have a key "programsOffered" with the value ["LC101", "LaunchCode Women+", "CodeCamp"]', function() {
    expect(launchcode.programsOffered).toContain('LC101');
    expect(launchcode.programsOffered).toContain('LaunchCode Women+');
    expect(launchcode.programsOffered).toContain('CodeCamp');
    expect(launchcode.programsOffered.length).toEqual(3);
  });
// launchOutPut




  
});