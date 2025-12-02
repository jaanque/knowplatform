import './IdePreview.css';

const IdePreview = () => {
  return (
    <div className="ide-window">
      <div className="ide-header">
        <div className="window-controls">
          <span className="dot red"></span>
          <span className="dot yellow"></span>
          <span className="dot green"></span>
        </div>
        <div className="tab-bar">
          <div className="tab active">
            <span className="icon-js">JS</span>
            App.tsx
            <span className="close-tab">×</span>
          </div>
          <div className="tab">
            <span className="icon-css">#</span>
            App.css
          </div>
        </div>
      </div>

      <div className="ide-body">
        <div className="sidebar">
          <div className="sidebar-item active">📁</div>
          <div className="sidebar-item">🔍</div>
          <div className="sidebar-item">🌿</div>
          <div className="sidebar-item">📦</div>
        </div>

        <div className="editor-area">
          <div className="line-numbers">
            {Array.from({length: 12}, (_, i) => <div key={i}>{i + 1}</div>)}
          </div>
          <div className="code-content">
            <div className="code-line"><span className="kwd">import</span> <span className="str">React</span> <span className="kwd">from</span> <span className="str">'react'</span>;</div>
            <div className="code-line"></div>
            <div className="code-line"><span className="kwd">function</span> <span className="func">App</span>() {'{'}</div>
            <div className="code-line indent-1"><span className="kwd">const</span> [count, setCount] = <span className="func">useState</span>(0);</div>
            <div className="code-line"></div>
            <div className="code-line indent-1"><span className="cmt">// Sincronización en tiempo real activa</span></div>
            <div className="code-line indent-1"><span className="kwd">return</span> (</div>
            <div className="code-line indent-2">&lt;<span className="tag">div</span> className=<span className="str">"collaborate"</span>&gt;</div>
            <div className="code-line indent-3">&lt;<span className="tag">h1</span>&gt;Hello World&lt;/<span className="tag">h1</span>&gt;</div>
            <div className="code-line indent-2">&lt;/<span className="tag">div</span>&gt;</div>
            <div className="code-line indent-1">);</div>
            <div className="code-line">{'}'}</div>
          </div>

          <div className="cursor-indicator">
            <div className="cursor-label">Ana is typing...</div>
            <div className="cursor-caret"></div>
          </div>
        </div>
      </div>

      <div className="ide-status-bar">
        <div className="status-left">
          <span>main*</span>
          <span>0 errors</span>
        </div>
        <div className="status-right">
          <span>TypeScript React</span>
          <span>🚀 Live</span>
        </div>
      </div>
    </div>
  );
};

export default IdePreview;
