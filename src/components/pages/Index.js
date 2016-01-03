require('normalize.css');
require('styles/App.css');

import React from 'react';

const Index = () => (
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <div className="hero">
          <h2>Get Started</h2>
          <p>OpenCV Studio allows you to train computer vision models using OpenCV and cascade classifiers.</p>
        </div>

        <div className="">
          <h3>1. Upload an image set</h3>
          <p>
            You&apos;ll need lots and lots of images to train a good classifier. Start by
            <a href="/sets/upload">uploading and image set</a>.
          </p>
        </div>

        <h3>2. Tell OpenCV Studio what objects you want to detect</h3>
        <p>
          All we need is a simple name, like "Apollo the cat" or "Garage door". You can train for multiple objects using the same image set, if that makes sense for your case.
        </p>

        <h3>3. Draw boxes</h3>
        <ul>
          <li>Drag your mouse or finger over an area to select it.</li>
          <li>Use two fingers to move or resize boxes.</li>
          <li>On a mouse, use the scrollwheel (or shift+scroll) to resize the box.</li>
          <li>Click
            <span className="code">+ POS</span>
            or
            <span className="code">- NEG</span>
            to commit the boxes or set the image as having no objects.</li>
        </ul>

        <h3>4. Generate a cascade classifier</h3>
        <p>
          Open up the
          <a href="/sets">sets view</a>
          and click the download button.
        </p>

        <h3>5. Use it!</h3>
        <p>
          Load your classifier XML into OpenCV and run images thorugh it.
        </p>
        <pre className="code js-highlight">{`var cv = require('opencv');
var classifierXml = './node_modules/opencv/data/haarcascade_frontalface_alt2.xml';

module.exports.detectFaces = function(imageBuffer, callback) {
  cv.readImage(imageBuffer, function(err, im) {

    // Assuming 640x480 image, good tester for client.
    // callback(null, [{x: 5, y: 5, w: 630, h: 470}]); return;

    if (err) { callback(err); }
    im.detectObject(classifierXml, {}, function(err, faces) {
      if (err) { callback(err); }

      var rects = [];
      for (var i = 0; i < faces.length; i++) {
        var f = faces[i];
        rects.push({ x: f.x, y: f.y, w: f.width, h: f.height });
      }
      callback(null, rects);
    });
  });
};`}</pre>
      </div>
    </div>
  </div>
)

export default Index
