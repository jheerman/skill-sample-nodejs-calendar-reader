import ical from 'ical';

describe("Calendar Suite", function () {
	it("can run a test successfully", function () {
		var check = true;
		expect(check).toBe(true);
	};

	it("can import iCal library", function() {
		expect(ical).not.toBe(null);	
	}
});
