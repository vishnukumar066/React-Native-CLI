import React, { useState } from 'react';
import { ScrollView, Text, View } from 'react-native';

import ImportDocumentButton from './ImportDocumentButton';
import MultiDocumentButton from './MultiDocumentButton';
import FileTypeDocumentButton from './FileTypeDocumentButton';
import OpenOnceDocumentButton from './OpenOnceDocumentButton';
import LongTermDocumentButton from './LongTermDocumentButton';
import DirectoryPickerButton from './DirectoryPickerButton';
import KeepLocalCopyButton from './KeepLocalCopyButton';
import VirtualFileButton from './VirtualFileButton';
import SaveDocumentButton from './SaveDocumentButton';
import ViewDocumentButton from './ViewDocumentButton';
import TypeCheckerButton from './TypeCheckerButton';
import ReleaseAccessButton from './ReleaseAccessButton';
import PickerAppearanceButton from './PickerAppearanceButton';

const DocumentPlayground = () => {
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [selectedDocuments, setSelectedDocuments] = useState([]);
  const [longTermDocument, setLongTermDocument] = useState(null);
  const [bookmark, setBookmark] = useState(null);
  const [localUri, setLocalUri] = useState(null);
  const [directory, setDirectory] = useState(null);

  return (
    <ScrollView
      className="flex-1 "
      contentContainerClassName="px-5 pb-12 pt-6"
      showsVerticalScrollIndicator={false}
    >
      <Text className="text-2xl font-extrabold text-slate-900">
        Document Playground
      </Text>

      <Text className="mb-6 mt-1 text-sm text-slate-500">
        React Native Documents + NativeWind
      </Text>

      <Text className="mb-3 mt-2 text-xs font-extrabold uppercase tracking-widest text-slate-500">
        Picker
      </Text>

      <ImportDocumentButton
        onPicked={file => {
          setSelectedDocument(file);
          setBookmark(null);
        }}
      />

      <MultiDocumentButton
        onPicked={files => {
          setSelectedDocuments(files);
          setSelectedDocument(files[0] || null);
        }}
      />

      <FileTypeDocumentButton
        onPicked={files => {
          setSelectedDocuments(files);
          setSelectedDocument(files[0] || null);
        }}
      />

      <OpenOnceDocumentButton
        onPicked={file => {
          setSelectedDocument(file);
          setBookmark(null);
        }}
      />

      <LongTermDocumentButton
        onPicked={file => {
          setLongTermDocument(file);
          setSelectedDocument(file);
        }}
        onBookmark={setBookmark}
      />

      <DirectoryPickerButton onPicked={setDirectory} />

      <KeepLocalCopyButton onLocalCopy={setLocalUri} />

      <VirtualFileButton onLocalCopy={setLocalUri} />

      <TypeCheckerButton />

      <PickerAppearanceButton />

      <Text className="mb-3 mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-500">
        Viewer
      </Text>

      <ViewDocumentButton
        uri={localUri || selectedDocument?.uri}
        mimeType={selectedDocument?.type}
        bookmark={bookmark}
      />

      <Text className="mb-3 mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-500">
        Save / Export
      </Text>

      <SaveDocumentButton
        sourceUri={localUri || selectedDocument?.uri}
        mimeType={selectedDocument?.type}
        fileName={selectedDocument?.name || 'MyDocument'}
      />

      <Text className="mb-3 mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-500">
        Access Management
      </Text>

      <ReleaseAccessButton uri={longTermDocument?.uri} />

      <Text className="mb-3 mt-5 text-xs font-extrabold uppercase tracking-widest text-slate-500">
        Current State
      </Text>

      <View className="rounded-2xl bg-slate-100 p-4">
        <Text className="mb-2 text-base font-bold text-slate-900">
          Selected document
        </Text>

        <Text className="mb-2 text-sm text-slate-700">
          Name: {selectedDocument?.name || 'None'}
        </Text>

        <Text className="mb-2 text-sm text-slate-700">
          MIME: {selectedDocument?.type || 'Unknown'}
        </Text>

        <Text className="mb-2 text-sm text-slate-700">
          Multiple selected: {selectedDocuments.length}
        </Text>

        <Text className="mb-2 text-sm text-slate-700">
          Local URI: {localUri || 'None'}
        </Text>

        <Text className="mb-2 text-sm text-slate-700">
          Bookmark: {bookmark || 'None'}
        </Text>

        <Text className="text-sm text-slate-700">
          Directory: {directory?.uri || 'None'}
        </Text>
      </View>
    </ScrollView>
  );
};

export default DocumentPlayground;
