import React, { Component } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { IP } from '../../../../constants/ip';

import api from '../../../../services/api';

import { formats } from './toolbar';

interface IProps {
  value: string;
  onChange: Function;
}

interface IState {
  content: string;
}

class Editor extends Component<IProps, IState> {
  private quill: any;
  constructor(props: any) {
    super(props);
    this.state = {
      content: '',
    };
    this.quill = React.createRef();
  }

  imageHandler() {
    const input = document.createElement('input');
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();

    input.onchange = async () => {
      const file = input.files![0];
      const formData = new FormData();

      formData.append('file', file);

      const range = this.quill.getSelection(true);

      this.quill.setSelection(range.index + 1);

      const res = await api.post('/upload/image', formData, {
        headers: {
          authorization: localStorage.getItem('Authorization'),
        },
      });
      const position = range ? range.index + 1 : 0;

      this.quill.insertEmbed(position, 'image', `${IP}/` + res.data.image);
      this.quill.setSelection(position + 1);
    };
  }

  render() {
    return (
      <div>
        <ReactQuill
          ref={(el) => {
            this.quill = el;
          }}
          value={this.props.value}
          onChange={(e) => this.props.onChange(e)}
          theme="snow"
          modules={this.modules}
          formats={formats}
          className="editor"
          placeholder="Escreva seu artigo..."
        />
      </div>
    );
  }
  modules = {
    toolbar: {
      container: [
        [{ size: ['small', 'large', 'huge', false] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
          { align: '' },
          { align: 'center' },
          { align: 'right' },
          { align: 'justify' },
        ],
        [
          { list: 'ordered' },
          { list: 'bullet' },
          { indent: '-1' },
          { indent: '+1' },
        ],
        ['link', 'image'],
        ['clean'],
      ],
      handlers: {
        image: this.imageHandler,
      },
    },
    history: {
      delay: 2000,
      maxStack: 500,
      userOnly: true,
    },
  };
}

export default Editor;
