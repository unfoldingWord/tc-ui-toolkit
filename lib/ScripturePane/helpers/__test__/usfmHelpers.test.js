"use strict";

var _usfmHelpers = require("../usfmHelpers");

var input = '...Christ Jesus. \\f + \\ft Some early versions omit, \\fqa in Ephesus, \\fqa* but this expression is probably in Paul\'s original letter.\\f*';
it('removes all extra tags', function () {
  var expected = '...Christ Jesus. ';
  var output = (0, _usfmHelpers.removeMarker)(input);
  expect(output).toEqual(expected);
});
it('removes f tags with following s5 tag', function () {
  var input = 'He even tried to desecrate the temple, so we arrested him.\\f + \\ft Some ancient copies add, \\fqa "We wanted to judge him according to our law \\fqa* . \\f*\\s5';
  var expected = 'He even tried to desecrate the temple, so we arrested him.';
  var output = (0, _usfmHelpers.removeMarker)(input);
  expect(output).toEqual(expected);
});
it('removes f and s5 tags', function () {
  var input = 'He even tried to desecrate the temple, so we arrested him.\\f + \\ft Some ancient copies add, \\fqa "We wanted to judge him according to our law \\fqa* . \\f*\\s5';
  var expected = 'He even tried to desecrate the temple, so we arrested him.';
  var output = (0, _usfmHelpers.removeMarker)(input);
  expect(output).toEqual(expected);
});
it('removes f tags with following p tag', function () {
  var input = '\\f + \\ft Acts 28:29—Some ancient copies have verse 29: \\fqa When he had said these things, the Jews went away. They were having a great dispute among themselves \\fqa* . \\f*\\p';
  var expected = '';
  var output = (0, _usfmHelpers.removeMarker)(input);
  expect(output).toEqual(expected);
});
it('removes f and pi tags', function () {
  var input = '\\f + \\ft Acts 28:29—Some ancient copies have verse 29: \\fqa When he had said these things, the Jews went away. They were having a great dispute among themselves \\fqa* . \\f*\\pi more';
  var expected = 'more';
  var output = (0, _usfmHelpers.removeMarker)(input);
  expect(output).toEqual(expected);
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9TY3JpcHR1cmVQYW5lL2hlbHBlcnMvX190ZXN0X18vdXNmbUhlbHBlcnMudGVzdC5qcyJdLCJuYW1lcyI6WyJpbnB1dCIsIml0IiwiZXhwZWN0ZWQiLCJvdXRwdXQiLCJleHBlY3QiLCJ0b0VxdWFsIl0sIm1hcHBpbmdzIjoiOztBQUFBOztBQUVBLElBQU1BLEtBQUssR0FBRyxnSkFBZDtBQUVBQyxFQUFFLENBQUMsd0JBQUQsRUFBMkIsWUFBTTtBQUNqQyxNQUFNQyxRQUFRLEdBQUcsbUJBQWpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLCtCQUFhSCxLQUFiLENBQWY7QUFDQUksRUFBQUEsTUFBTSxDQUFDRCxNQUFELENBQU4sQ0FBZUUsT0FBZixDQUF1QkgsUUFBdkI7QUFDRCxDQUpDLENBQUY7QUFNQUQsRUFBRSxDQUFDLHNDQUFELEVBQXlDLFlBQU07QUFDL0MsTUFBTUQsS0FBSyxHQUFHLG9LQUFkO0FBQ0EsTUFBTUUsUUFBUSxHQUFHLDREQUFqQjtBQUNBLE1BQU1DLE1BQU0sR0FBRywrQkFBYUgsS0FBYixDQUFmO0FBQ0FJLEVBQUFBLE1BQU0sQ0FBQ0QsTUFBRCxDQUFOLENBQWVFLE9BQWYsQ0FBdUJILFFBQXZCO0FBQ0QsQ0FMQyxDQUFGO0FBT0FELEVBQUUsQ0FBQyx1QkFBRCxFQUEwQixZQUFNO0FBQ2hDLE1BQU1ELEtBQUssR0FBRyxvS0FBZDtBQUNBLE1BQU1FLFFBQVEsR0FBRyw0REFBakI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsK0JBQWFILEtBQWIsQ0FBZjtBQUNBSSxFQUFBQSxNQUFNLENBQUNELE1BQUQsQ0FBTixDQUFlRSxPQUFmLENBQXVCSCxRQUF2QjtBQUNELENBTEMsQ0FBRjtBQU9BRCxFQUFFLENBQUMscUNBQUQsRUFBd0MsWUFBTTtBQUM5QyxNQUFNRCxLQUFLLEdBQUcsc0xBQWQ7QUFDQSxNQUFNRSxRQUFRLEdBQUcsRUFBakI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsK0JBQWFILEtBQWIsQ0FBZjtBQUNBSSxFQUFBQSxNQUFNLENBQUNELE1BQUQsQ0FBTixDQUFlRSxPQUFmLENBQXVCSCxRQUF2QjtBQUNELENBTEMsQ0FBRjtBQU9BRCxFQUFFLENBQUMsdUJBQUQsRUFBMEIsWUFBTTtBQUNoQyxNQUFNRCxLQUFLLEdBQUcsNExBQWQ7QUFDQSxNQUFNRSxRQUFRLEdBQUcsTUFBakI7QUFDQSxNQUFNQyxNQUFNLEdBQUcsK0JBQWFILEtBQWIsQ0FBZjtBQUNBSSxFQUFBQSxNQUFNLENBQUNELE1BQUQsQ0FBTixDQUFlRSxPQUFmLENBQXVCSCxRQUF2QjtBQUNELENBTEMsQ0FBRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbW92ZU1hcmtlciB9IGZyb20gJy4uL3VzZm1IZWxwZXJzJztcblxuY29uc3QgaW5wdXQgPSAnLi4uQ2hyaXN0IEplc3VzLiBcXFxcZiArIFxcXFxmdCBTb21lIGVhcmx5IHZlcnNpb25zIG9taXQsIFxcXFxmcWEgaW4gRXBoZXN1cywgXFxcXGZxYSogYnV0IHRoaXMgZXhwcmVzc2lvbiBpcyBwcm9iYWJseSBpbiBQYXVsXFwncyBvcmlnaW5hbCBsZXR0ZXIuXFxcXGYqJztcblxuaXQoJ3JlbW92ZXMgYWxsIGV4dHJhIHRhZ3MnLCAoKSA9PiB7XG4gIGNvbnN0IGV4cGVjdGVkID0gJy4uLkNocmlzdCBKZXN1cy4gJztcbiAgY29uc3Qgb3V0cHV0ID0gcmVtb3ZlTWFya2VyKGlucHV0KTtcbiAgZXhwZWN0KG91dHB1dCkudG9FcXVhbChleHBlY3RlZCk7XG59KTtcblxuaXQoJ3JlbW92ZXMgZiB0YWdzIHdpdGggZm9sbG93aW5nIHM1IHRhZycsICgpID0+IHtcbiAgY29uc3QgaW5wdXQgPSAnSGUgZXZlbiB0cmllZCB0byBkZXNlY3JhdGUgdGhlIHRlbXBsZSwgc28gd2UgYXJyZXN0ZWQgaGltLlxcXFxmICsgXFxcXGZ0IFNvbWUgYW5jaWVudCBjb3BpZXMgYWRkLCBcXFxcZnFhIFwiV2Ugd2FudGVkIHRvIGp1ZGdlIGhpbSBhY2NvcmRpbmcgdG8gb3VyIGxhdyBcXFxcZnFhKiAuIFxcXFxmKlxcXFxzNSc7XG4gIGNvbnN0IGV4cGVjdGVkID0gJ0hlIGV2ZW4gdHJpZWQgdG8gZGVzZWNyYXRlIHRoZSB0ZW1wbGUsIHNvIHdlIGFycmVzdGVkIGhpbS4nO1xuICBjb25zdCBvdXRwdXQgPSByZW1vdmVNYXJrZXIoaW5wdXQpO1xuICBleHBlY3Qob3V0cHV0KS50b0VxdWFsKGV4cGVjdGVkKTtcbn0pO1xuXG5pdCgncmVtb3ZlcyBmIGFuZCBzNSB0YWdzJywgKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9ICdIZSBldmVuIHRyaWVkIHRvIGRlc2VjcmF0ZSB0aGUgdGVtcGxlLCBzbyB3ZSBhcnJlc3RlZCBoaW0uXFxcXGYgKyBcXFxcZnQgU29tZSBhbmNpZW50IGNvcGllcyBhZGQsIFxcXFxmcWEgXCJXZSB3YW50ZWQgdG8ganVkZ2UgaGltIGFjY29yZGluZyB0byBvdXIgbGF3IFxcXFxmcWEqIC4gXFxcXGYqXFxcXHM1JztcbiAgY29uc3QgZXhwZWN0ZWQgPSAnSGUgZXZlbiB0cmllZCB0byBkZXNlY3JhdGUgdGhlIHRlbXBsZSwgc28gd2UgYXJyZXN0ZWQgaGltLic7XG4gIGNvbnN0IG91dHB1dCA9IHJlbW92ZU1hcmtlcihpbnB1dCk7XG4gIGV4cGVjdChvdXRwdXQpLnRvRXF1YWwoZXhwZWN0ZWQpO1xufSk7XG5cbml0KCdyZW1vdmVzIGYgdGFncyB3aXRoIGZvbGxvd2luZyBwIHRhZycsICgpID0+IHtcbiAgY29uc3QgaW5wdXQgPSAnXFxcXGYgKyBcXFxcZnQgQWN0cyAyODoyOeKAlFNvbWUgYW5jaWVudCBjb3BpZXMgaGF2ZSB2ZXJzZSAyOTogXFxcXGZxYSBXaGVuIGhlIGhhZCBzYWlkIHRoZXNlIHRoaW5ncywgdGhlIEpld3Mgd2VudCBhd2F5LiBUaGV5IHdlcmUgaGF2aW5nIGEgZ3JlYXQgZGlzcHV0ZSBhbW9uZyB0aGVtc2VsdmVzIFxcXFxmcWEqIC4gXFxcXGYqXFxcXHAnO1xuICBjb25zdCBleHBlY3RlZCA9ICcnO1xuICBjb25zdCBvdXRwdXQgPSByZW1vdmVNYXJrZXIoaW5wdXQpO1xuICBleHBlY3Qob3V0cHV0KS50b0VxdWFsKGV4cGVjdGVkKTtcbn0pO1xuXG5pdCgncmVtb3ZlcyBmIGFuZCBwaSB0YWdzJywgKCkgPT4ge1xuICBjb25zdCBpbnB1dCA9ICdcXFxcZiArIFxcXFxmdCBBY3RzIDI4OjI54oCUU29tZSBhbmNpZW50IGNvcGllcyBoYXZlIHZlcnNlIDI5OiBcXFxcZnFhIFdoZW4gaGUgaGFkIHNhaWQgdGhlc2UgdGhpbmdzLCB0aGUgSmV3cyB3ZW50IGF3YXkuIFRoZXkgd2VyZSBoYXZpbmcgYSBncmVhdCBkaXNwdXRlIGFtb25nIHRoZW1zZWx2ZXMgXFxcXGZxYSogLiBcXFxcZipcXFxccGkgbW9yZSc7XG4gIGNvbnN0IGV4cGVjdGVkID0gJ21vcmUnO1xuICBjb25zdCBvdXRwdXQgPSByZW1vdmVNYXJrZXIoaW5wdXQpO1xuICBleHBlY3Qob3V0cHV0KS50b0VxdWFsKGV4cGVjdGVkKTtcbn0pO1xuIl19