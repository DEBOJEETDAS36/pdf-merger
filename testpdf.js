a=import('pdf-merger-js');
var merger = new a.PDFMerger();

let m = async (p1, p2) => {
  await merger.add('1.pdf');  //merge all pages. parameter is the path to file and filename.
  await merger.add('output.pdf'); // merge only page 2

  await merger.save('merged.pdf'); //save under given name and reset the internal document
}
module.exports=(m)