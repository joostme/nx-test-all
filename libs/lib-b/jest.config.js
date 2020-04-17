module.exports = {
  name: 'lib-b',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/libs/lib-b',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
