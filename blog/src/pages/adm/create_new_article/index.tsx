import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Editor from './components/editor';

import Header from '../components/header';

import api from '../../../services/api';

import { Container, Button, TagButton } from './styles';
import isLoged from '../../../services/isLoged';
import { findAllTags } from '../../../services/tags_controller';

interface ITags {
  tag: String;
  isActive: boolean;
}

const PanelPage = () => {
  const history = useHistory();
  const [title, setTitle] = useState('');
  const [tags, setTags] = useState<ITags[]>([]);
  const [tag, setTag] = useState('');
  const [isAddTag, setIsAddTag] = useState(false);
  const [thumbnail, setThumbnail] = useState<any>(null);
  const [content, setContent] = useState('');

  useEffect(() => {
    verifyLogin();
    pickTags();
    // eslint-disable-next-line
  }, []);

  const pickTags = async () => {
    const tags = (await findAllTags()).map(
      (tag): ITags => {
        return {
          tag,
          isActive: false,
        };
      }
    );
    setTags(tags);
  };

  const verifyLogin = async () => {
    if (!(await isLoged())) {
      localStorage.removeItem('Authorization');
      return history.push('/adm/login');
    }
  };

  const handleCreatePost = async () => {
    const selectedTags = tags
      .filter(({ isActive }) => isActive)
      .map(({ tag }) => tag);
    if (selectedTags.length <= 0) return alert('Nenhuma tag selecionada');
    const data = new FormData();
    data.append('title', title);
    data.append('content', content);
    data.append('tags', JSON.stringify(selectedTags));
    data.append('thumbnail', thumbnail);

    const res = await api.post('/database/post', data, {
      headers: {
        authorization: localStorage.getItem('Authorization'),
      },
    });
    if (res.data.id !== undefined) {
      return history.push('/adm/panel');
    } else {
      alert('Ocorreu um erro!');
    }
  };

  const addNewTag = async () => {
    const res = await api.post(
      '/database/tag',
      { tag },
      {
        headers: {
          authorization: localStorage.getItem('Authorization'),
        },
      }
    );
    setTags([...tags, { tag: res.data.tag, isActive: false }]);
    setIsAddTag(false);
    setTag('');
  };

  return (
    <Container>
      <Header />
      <h2>Criar nova Postagem</h2>
      <div className="title-container">
        <label htmlFor="title">Título do artigo</label>
        <input
          type="text"
          id="title"
          placeholder="Título da postagem"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <Editor value={content} onChange={setContent} />
      <div className="controls-extra">
        <div className="tags-container">
          {tags.length <= 0 ? null : (
            <>
              <div className="tag-buttons-container">
                {tags.map(({ tag, isActive }, index) => (
                  <TagButton
                    key={`${tag}-${index}`}
                    isActive={isActive}
                    onClick={() => {
                      const newTagsState = tags.map(
                        (prop): ITags => {
                          if (prop.tag === tag)
                            return {
                              tag,
                              isActive: !prop.isActive,
                            };
                          return prop;
                        }
                      );
                      setTags(newTagsState);
                    }}
                  >
                    {tag}
                  </TagButton>
                ))}
              </div>
              <strong>Tags</strong>
            </>
          )}
          <Button
            width="100px"
            isClicked={isAddTag}
            onClick={() => setIsAddTag(!isAddTag)}
          >
            Adicionar tag
          </Button>
          {isAddTag ? (
            <div className="add-tag">
              <input
                type="text"
                id="new-tag"
                placeholder="Nome da tag..."
                value={tag}
                onChange={(e) => setTag(e.target.value)}
              />
              <button onClick={addNewTag}>Adicionar</button>
            </div>
          ) : null}
        </div>
        <div className="thumbnail">
          <label htmlFor="thumbnail">Insira a miniatura</label>
          <input
            type="file"
            id="thumbnail"
            placeholder="Escolha a miniatura"
            accept="image/*"
            onChange={(e) => setThumbnail(e.target.files![0])}
          />
        </div>
        <Button type="submit" width="150px" onClick={handleCreatePost}>
          Criar nova postagem
        </Button>
      </div>
    </Container>
  );
};

export default PanelPage;
