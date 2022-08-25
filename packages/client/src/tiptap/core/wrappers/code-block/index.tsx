// import { IconCopy } from '@douyinfe/semi-icons';
import { Button, Select, Typography } from '@douyinfe/semi-ui';
import { NodeViewContent, NodeViewWrapper } from '@tiptap/react';
import cls from 'classnames';
import { copy } from 'helpers/copy';
import React, { useRef } from 'react';

import styles from './index.module.scss';

export const CodeBlockWrapper = ({ editor, node: { attrs }, updateAttributes, extension }) => {
  const isEditable = editor.isEditable;
  const isPrint = editor?.options?.editorProps?.print;
  const { language: defaultLanguage } = attrs;
  const $container = useRef<HTMLPreElement>();

  return (
    <NodeViewWrapper className={cls(styles.wrap, !isPrint && styles.maxHeight, 'render-wrapper')}>
      <div className={styles.handleWrap}>
        <Select
          size="small"
          defaultValue={defaultLanguage || 'null'}
          onChange={(value) => updateAttributes({ language: value })}
          className={styles.selectorWrap}
          disabled={!isEditable}
          filter
        >
          <Select.Option value="null">auto</Select.Option>
          {extension.options.lowlight.listLanguages().map((lang, index) => (
            <Select.Option key={index} value={lang}>
              {lang}
            </Select.Option>
          ))}
        </Select>
        {!isEditable && (
          <Button size="small" type="tertiary" theme="borderless" onClick={() => copy($container.current.innerText)}>
            <Typography.Text style={{ fontWeight: 'normal' }}>复制代码</Typography.Text>
          </Button>
        )}
      </div>
      <pre ref={$container} className={styles.pre}>
        <NodeViewContent as="code" />
      </pre>
    </NodeViewWrapper>
  );
};
