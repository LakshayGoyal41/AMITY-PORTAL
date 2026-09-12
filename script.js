/**
 * Amity University - BBA IB Sem 1 Attendance & Punch-Card Tracker
 * Generated JavaScript Module for Dynamic DOM Injection
 */

(function () {
  'use strict';

  // Inject Design System & Component Styles
  const styleSheet = document.createElement('style');
  styleSheet.type = 'text/css';
  styleSheet.innerText = `
    :root {
      --bg-canvas: #070b14;
      --surface-base: rgba(14, 21, 37, 0.75);
      --surface-card: rgba(18, 28, 49, 0.78);
      --surface-card-hover: rgba(24, 38, 66, 0.88);
      --surface-inset: rgba(10, 15, 28, 0.88);
      --surface-pill: rgba(0, 210, 255, 0.08);
      --border-subtle: rgba(255, 255, 255, 0.08);
      --border-medium: rgba(0, 210, 255, 0.28);
      --border-focus: rgba(0, 210, 255, 0.65);
      --glass-glow: 0 14px 40px -8px rgba(0, 0, 0, 0.65);
      --glass-glow-lg: 0 26px 64px -12px rgba(0, 0, 0, 0.8);
      --text-main: #f8fafc;
      --text-muted: #94a3b8;
      --text-faint: #64748b;
      --amity-cyan: #00d2ff;
      --amity-cyan-light: #e0f8ff;
      --amity-cyan-glow: rgba(0, 210, 255, 0.3);
      --safe: #00f5a0;
      --safe-bg: rgba(0, 245, 160, 0.12);
      --safe-border: rgba(0, 245, 160, 0.38);
      --safe-glow: rgba(0, 245, 160, 0.32);
      --danger: #ff3366;
      --danger-bg: rgba(255, 51, 102, 0.12);
      --danger-border: rgba(255, 51, 102, 0.38);
      --danger-glow: rgba(255, 51, 102, 0.35);
      --holiday-yellow: #f59e0b;
      --holiday-yellow-bg: rgba(245, 158, 11, 0.16);
      --holiday-yellow-border: rgba(245, 158, 11, 0.45);
      --holiday-yellow-glow: rgba(245, 158, 11, 0.35);
      --subj-econ: #00d2ff;
      --subj-mgmt: #a855f7;
      --subj-acct: #10b981;
      --subj-bc: #f59e0b;
      --warning: #ffb703;
      --warning-bg: rgba(255, 183, 3, 0.12);
      --warning-border: rgba(255, 183, 3, 0.4);
      --radius-2xl: 22px;
      --radius-xl: 14px;
      --radius-lg: 10px;
      --radius-sm: 6px;
      --radius-full: 9999px;
      --transition-smooth: cubic-bezier(0.16, 1, 0.3, 1);
    }

    html { scroll-behavior: smooth; }
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
    body {
      zoom: 1.1;
      background-color: var(--bg-canvas);
      background-image: radial-gradient(ellipse 90% 60% at 50% -12%, rgba(0, 210, 255, 0.12) 0%, transparent 65%), linear-gradient(rgba(255, 255, 255, 0.015) 1px, transparent 1px);
      background-size: 100% 100%, 48px 48px;
      background-attachment: fixed;
      color: var(--text-main);
      font-family: "Plus Jakarta Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      padding: 48px 18px 68px;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
    }
    .page-wrapper { flex: 1; display: flex; flex-direction: column; }
    .container { max-width: 840px; margin: 0 auto; position: relative; width: 100%; flex: 1; }
    
    .login-section { display: none; min-height: calc(100vh - 160px); align-items: center; justify-content: center; padding: 20px 0; }
    .login-section.active { display: flex; }
    .login-card {
      background: var(--surface-card);
      backdrop-filter: blur(28px);
      border: 1px solid var(--border-medium);
      border-radius: var(--radius-2xl);
      padding: 42px 36px;
      width: 100%;
      max-width: 440px;
      box-shadow: var(--glass-glow-lg);
      text-align: center;
      position: relative;
      overflow: hidden;
    }
    .login-card::before {
      content: ""; position: absolute; top: 0; left: 0; right: 0; height: 4px;
      background: linear-gradient(90deg, var(--amity-cyan), var(--safe));
      box-shadow: 0 0 16px var(--amity-cyan);
    }
    .login-logo-container { position: relative; margin-bottom: 14px; display: inline-block; }
    .login-uni-logo { position: relative; z-index: 1; width: 74px; height: auto; mix-blend-mode: screen; filter: drop-shadow(0 8px 20px rgba(0, 0, 0, 0.6)); }
    .login-uni-badge {
      display: inline-flex; align-items: center; letter-spacing: 2.5px; font-size: 0.74rem; font-weight: 800;
      color: var(--amity-cyan-light); background: linear-gradient(135deg, rgba(0, 210, 255, 0.2), rgba(0, 210, 255, 0.05));
      border: 1px solid var(--border-focus); padding: 5px 16px; border-radius: var(--radius-full); margin-bottom: 10px;
    }
    .login-card h2 { font-size: 1.55rem; font-weight: 800; color: #fff; margin-bottom: 6px; }
    .login-card p { font-size: 0.84rem; color: var(--text-muted); margin-bottom: 28px; }
    .login-form { display: flex; flex-direction: column; gap: 16px; text-align: left; }
    .form-group { display: flex; flex-direction: column; gap: 6px; }
    .form-group label { font-size: 0.78rem; font-weight: 700; text-transform: uppercase; color: var(--text-muted); }
    .form-input {
      background: var(--surface-inset); border: 1.5px solid var(--border-subtle); border-radius: var(--radius-xl);
      padding: 13px 16px; font-size: 0.95rem; color: #fff; font-family: inherit; outline: none; transition: all 0.2s ease;
    }
    .form-input:focus { border-color: var(--amity-cyan); box-shadow: 0 0 16px var(--amity-cyan-glow); background: rgba(10, 15, 28, 0.95); }
    .form-input[readonly] { color: var(--amity-cyan-light); font-family: "JetBrains Mono", monospace; font-weight: 700; background: rgba(0, 210, 255, 0.04); border-color: rgba(0, 210, 255, 0.2); cursor: not-allowed; }
    .btn-login {
      margin-top: 8px; background: linear-gradient(135deg, rgba(0, 210, 255, 0.9), rgba(0, 150, 216, 0.9));
      color: #030712; font-size: 0.95rem; font-weight: 800; padding: 14px; border-radius: var(--radius-xl); cursor: pointer;
      box-shadow: 0 6px 20px var(--amity-cyan-glow); transition: all 0.2s ease;
    }
    .btn-login:hover { filter: brightness(1.1); box-shadow: 0 8px 26px rgba(0, 210, 255, 0.45); transform: translateY(-1px); }

    .app-main-wrapper { display: none; }
    .app-main-wrapper.active { display: block; }

    .sidebar-toggle-btn {
      position: fixed; top: 24px; left: 24px; z-index: 1000; width: 46px; height: 46px;
      border-radius: var(--radius-xl); background: var(--surface-card); border: 1px solid var(--border-medium);
      backdrop-filter: blur(20px); box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5), 0 0 16px var(--amity-cyan-glow);
      display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 5px; cursor: pointer;
      transition: opacity 0.25s, transform 0.25s, visibility 0.25s; opacity: 1; visibility: visible;
    }
    .sidebar-toggle-btn.hidden { opacity: 0; visibility: hidden; transform: scale(0.8); pointer-events: none; }
    .sidebar-toggle-btn span { display: block; width: 20px; height: 2px; background-color: var(--amity-cyan); border-radius: 2px; }

    .sidebar-backdrop {
      position: fixed; inset: 0; background: rgba(4, 7, 13, 0.75); backdrop-filter: blur(6px); z-index: 998; opacity: 0; pointer-events: none; transition: opacity 0.3s ease;
    }
    .sidebar-backdrop.active { opacity: 1; pointer-events: auto; }

    .sidebar {
      position: fixed; top: 0; left: 0; bottom: 0; width: 320px;
      background: linear-gradient(175deg, rgba(14, 21, 37, 0.95), rgba(7, 11, 20, 0.98));
      backdrop-filter: blur(30px); border-right: 1px solid var(--border-medium); z-index: 999;
      transform: translateX(-100%); transition: transform 0.32s var(--transition-smooth); display: flex; flex-direction: column; padding: 28px 20px 20px; overflow-y: auto;
    }
    .sidebar.open { transform: translateX(0); }
    .sidebar-brand { display: flex; align-items: center; gap: 14px; padding-bottom: 20px; border-bottom: 1px solid var(--border-subtle); margin-bottom: 20px; }
    .sidebar-logo { width: 44px; height: auto; mix-blend-mode: screen; filter: drop-shadow(0 4px 12px rgba(0, 210, 255, 0.4)); }
    .sidebar-title { font-size: 1rem; font-weight: 800; color: #fff; }
    .sidebar-subtitle { font-size: 0.72rem; color: var(--amity-cyan); font-weight: 600; text-transform: uppercase; }
    .sidebar-close-btn {
      margin-left: auto; background: rgba(255, 255, 255, 0.04); border: 1px solid var(--border-subtle); color: var(--text-muted);
      width: 34px; height: 34px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; cursor: pointer;
    }
    .sidebar-nav { display: flex; flex-direction: column; gap: 10px; margin-bottom: 20px; flex: 1; }
    .nav-item {
      display: flex; align-items: center; gap: 14px; padding: 14px 18px; border-radius: var(--radius-xl); background: transparent;
      border: 1px solid transparent; color: var(--text-muted); font-size: 0.92rem; font-weight: 600; text-align: left; width: 100%; cursor: pointer; transition: all 0.2s;
    }
    .nav-item:hover { color: #fff; background: rgba(0, 210, 255, 0.06); border-color: rgba(0, 210, 255, 0.2); }
    .nav-item.active { color: #fff; background: linear-gradient(135deg, rgba(0, 210, 255, 0.18), rgba(0, 210, 255, 0.05)); border-color: var(--border-focus); }
    .sidebar-footer { margin-top: auto; padding-top: 16px; border-top: 1px solid var(--border-subtle); display: flex; flex-direction: column; gap: 14px; }
    .btn-logout {
      background: linear-gradient(135deg, rgba(255, 51, 102, 0.2), rgba(217, 4, 41, 0.2)); border: 1px solid rgba(255, 51, 102, 0.4);
      color: #ff8fa3; font-size: 0.88rem; font-weight: 700; padding: 12px 18px; border-radius: var(--radius-xl); cursor: pointer; display: flex; align-items: center; gap: 12px; width: 100%;
    }
    .sidebar-dev-card {
      background: rgba(0, 210, 255, 0.04); border: 1px solid rgba(0, 210, 255, 0.18); border-radius: var(--radius-lg); padding: 12px 14px; font-size: 0.78rem; color: var(--text-muted); display: flex; flex-direction: column; gap: 5px;
    }
    .sidebar-dev-card .s-dev-title { font-size: 0.68rem; font-weight: 800; text-transform: uppercase; color: var(--amity-cyan); }
    .sidebar-dev-card .s-dev-name { color: #fff; font-weight: 700; }
    .sidebar-dev-card a { color: var(--text-muted); text-decoration: none; font-family: "JetBrains Mono", monospace; font-size: 0.72rem; }

    .scroll-top-btn {
      position: fixed; bottom: 28px; right: 28px; z-index: 995; width: 50px; height: 50px; border-radius: 50%;
      background: var(--surface-card); border: none; color: var(--amity-cyan); display: flex; align-items: center; justify-content: center; cursor: pointer;
      box-shadow: 0 8px 24px rgba(0, 0, 0, 0.5); opacity: 0; visibility: hidden; transform: translateY(16px); transition: all 0.25s;
    }
    .scroll-top-btn.visible { opacity: 1; visibility: visible; transform: translateY(0); }
    .scroll-progress-ring { position: absolute; inset: 0; width: 100%; height: 100%; transform: rotate(-90deg); pointer-events: none; }
    .scroll-track { fill: none; stroke: rgba(255, 255, 255, 0.08); stroke-width: 3; }
    .scroll-indicator { fill: none; stroke: var(--amity-cyan); stroke-width: 3.2; stroke-linecap: round; stroke-dasharray: 144.5; stroke-dashoffset: 144.5; }
    .arrow-icon { position: relative; z-index: 1; width: 20px; height: 20px; stroke: currentColor; stroke-width: 2.5; fill: none; stroke-linecap: round; stroke-linejoin: round; }

    header { text-align: center; margin-bottom: 32px; display: flex; flex-direction: column; align-items: center; }
    .uni-badge { display: inline-flex; align-items: center; gap: 6px; letter-spacing: 3px; font-size: 0.78rem; font-weight: 800; color: var(--amity-cyan-light); background: linear-gradient(135deg, rgba(0, 210, 255, 0.22), rgba(0, 210, 255, 0.05)); border: 1px solid var(--border-focus); padding: 6px 20px; border-radius: var(--radius-full); margin-bottom: 14px; }
    h1 { font-size: clamp(1.85rem, 4vw, 2.4rem); font-weight: 800; background: linear-gradient(180deg, #ffffff 40%, #cbd5e1 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 6px; }
    .subtitle { color: var(--text-muted); font-size: 0.96rem; font-weight: 500; }

    .fixed-target-bar { display: flex; align-items: center; justify-content: space-between; background: var(--surface-card); padding: 18px 24px; border-radius: var(--radius-2xl); border: 1px solid var(--border-subtle); margin-bottom: 24px; position: relative; overflow: hidden; }
    .fixed-target-bar::before { content: ""; position: absolute; left: 0; top: 0; bottom: 0; width: 4px; background: var(--amity-cyan); }
    .fixed-badge { background: linear-gradient(135deg, rgba(0, 210, 255, 0.28), rgba(0, 210, 255, 0.08)); color: var(--amity-cyan-light); border: 1.5px solid rgba(0, 210, 255, 0.85); font-weight: 800; font-family: "JetBrains Mono", monospace; padding: 7px 22px; border-radius: var(--radius-lg); font-size: 1.28rem; }

    .summary-card { background: linear-gradient(165deg, rgba(20, 31, 55, 0.78), rgba(10, 15, 28, 0.94)); border: 1px solid var(--border-subtle); border-radius: var(--radius-2xl); padding: 22px 20px; margin-bottom: 28px; display: grid; grid-template-columns: repeat(4, 1fr); gap: 14px; text-align: center; }
    .summary-item h3 { font-size: 0.7rem; text-transform: uppercase; letter-spacing: 1.3px; color: var(--text-faint); font-weight: 700; margin-bottom: 6px; }
    .summary-item p { font-size: 1.85rem; font-weight: 800; font-family: "JetBrains Mono", monospace; }

    .view-section { display: none; }
    .view-section.active { display: block; }
    .subject-list { display: flex; flex-direction: column; gap: 26px; }
    .subject-card { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-2xl); padding: 26px; position: relative; }
    .card-header { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 18px; gap: 16px; }
    .sub-title { font-size: 1.25rem; font-weight: 700; color: #fff; }
    .sub-code { font-size: 0.84rem; color: var(--text-muted); margin-top: 5px; }
    .percent-badge { font-size: 1.28rem; font-weight: 800; font-family: "JetBrains Mono", monospace; padding: 7px 16px; border-radius: var(--radius-lg); background: var(--surface-inset); border: 1px solid var(--border-subtle); display: inline-flex; align-items: center; gap: 8px; }

    .ratio-wrapper { background: var(--surface-inset); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 14px 16px; margin-bottom: 18px; }
    .ratio-labels { display: flex; justify-content: space-between; font-size: 0.8rem; font-weight: 600; margin-bottom: 9px; }
    .ratio-used-lbl { color: #ff5c8a; }
    .ratio-left-lbl { color: #00f5a0; }
    .ratio-bar { height: 8px; width: 100%; background: rgba(255, 255, 255, 0.06); border-radius: var(--radius-full); overflow: hidden; display: flex; }
    .bar-used { background: linear-gradient(90deg, #d90429, #ff3366); height: 100%; }
    .bar-left { background: linear-gradient(90deg, #00b4d8, #00f5a0); height: 100%; }

    .stats-grid { display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; text-align: center; background: var(--surface-inset); padding: 14px 10px; border-radius: var(--radius-xl); border: 1px solid var(--border-subtle); margin-bottom: 18px; }
    .stat-label { font-size: 0.7rem; color: var(--text-faint); text-transform: uppercase; font-weight: 700; }
    .stat-val { font-weight: 700; margin-top: 5px; font-size: 1.18rem; font-family: "JetBrains Mono", monospace; }

    .punch-card-section { margin-bottom: 16px; background: var(--surface-inset); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px; }
    .punch-header { display: flex; justify-content: space-between; align-items: center; font-size: 0.76rem; color: var(--text-faint); margin-bottom: 14px; font-weight: 700; }
    .slots { display: flex; gap: 9px; flex-wrap: wrap; }
    .slot { width: 38px; height: 38px; border-radius: var(--radius-lg); display: flex; align-items: center; justify-content: center; font-weight: 800; cursor: pointer; user-select: none; font-size: 14px; }
    .slot.blank { background: rgba(255, 255, 255, 0.02); border: 1.5px dashed rgba(255, 255, 255, 0.16); color: transparent; }
    .slot.used { background: linear-gradient(135deg, rgba(255, 51, 102, 0.24), rgba(217, 4, 41, 0.35)); border: 1.5px solid rgba(255, 51, 102, 0.85); color: #ffccd5; }
    .slot.overflow { background: linear-gradient(135deg, rgba(239, 35, 60, 0.5), rgba(160, 10, 30, 0.7)); border: 1.5px solid #ff3366; color: #ffe6eb; }

    .quote-box { margin-bottom: 16px; padding: 12px 16px; border-radius: var(--radius-lg); background: rgba(10, 15, 28, 0.75); border: 1px dashed var(--border-subtle); display: flex; align-items: flex-start; gap: 12px; font-size: 0.85rem; color: var(--text-muted); }
    .quote-box.positive { border-color: var(--safe-border); background: var(--safe-bg); color: #a7f3d0; }
    .quote-box.negative { border-color: var(--danger-border); background: var(--danger-bg); color: #fecdd3; }
    .advice { font-size: 0.88rem; margin-bottom: 18px; padding: 12px 16px; border-radius: var(--radius-lg); background: rgba(255, 255, 255, 0.02); border: 1px solid var(--border-subtle); border-left: 3.5px solid transparent; }
    .advice.safe { border-color: var(--safe-border); background: var(--safe-bg); color: #a7f3d0; }
    .advice.danger { border-color: var(--danger-border); background: var(--danger-bg); color: #fecdd3; }
    .advice.warning { border-color: rgba(251, 191, 36, 0.35); background: rgba(251, 191, 36, 0.07); color: #fde68a; }

    .controls-container { display: flex; flex-direction: column; gap: 12px; }
    .controls-row { display: flex; gap: 12px; }
    .control-group { flex: 1; display: flex; border-radius: var(--radius-xl); overflow: hidden; background: var(--surface-inset); border: 1px solid var(--border-subtle); }
    button { cursor: pointer; border: none; font-weight: 600; font-family: inherit; }
    .btn-step-minus { width: 46px; background: rgba(255, 255, 255, 0.035); color: var(--text-muted); font-size: 1.4rem; font-family: "JetBrains Mono", monospace; display: flex; align-items: center; justify-content: center; border-right: 1px solid var(--border-subtle); }
    .btn-step-add { flex: 1; padding: 13px 12px; font-size: 0.92rem; font-weight: 700; display: flex; align-items: center; justify-content: center; gap: 8px; }
    .btn-present-add { background: linear-gradient(135deg, rgba(0, 245, 160, 0.92), rgba(0, 180, 216, 0.92)); color: #022c22; }
    .btn-absent-add { background: linear-gradient(135deg, rgba(255, 51, 102, 0.92), rgba(217, 4, 41, 0.92)); color: #4c0519; }
    .secondary-row { display: flex; justify-content: flex-end; }
    .btn-edit-manual { background: transparent; border: 1px solid var(--border-subtle); color: var(--text-faint); font-size: 0.78rem; padding: 7px 16px; border-radius: var(--radius-full); font-weight: 600; }

    .timetable-wrapper { display: flex; flex-direction: column; gap: 22px; }
    .tt-header-card { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-2xl); padding: 18px 22px; display: flex; flex-direction: column; gap: 16px; }
    .tt-meta-row { display: flex; align-items: center; gap: 10px; }
    .tt-title-group h2 { font-size: 1.15rem; font-weight: 800; color: #fff; }
    .tt-title-group p { font-size: 0.78rem; color: var(--text-muted); margin-top: 2px; }
    .tt-pills-row { display: flex; gap: 8px; overflow-x: auto; scrollbar-width: none; }
    .tt-day-pill { background: var(--surface-inset); border: 1px solid var(--border-subtle); color: var(--text-muted); font-size: 0.8rem; font-weight: 700; padding: 7px 18px; border-radius: var(--radius-full); cursor: pointer; white-space: nowrap; }
    .tt-day-pill.active { color: #fff; background: linear-gradient(135deg, rgba(0, 210, 255, 0.25), rgba(0, 210, 255, 0.08)); border-color: var(--amity-cyan); }
    .tt-day-card { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-2xl); padding: 24px; position: relative; }
    .tt-day-card.hidden { display: none; }
    .day-banner-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px; }
    .day-name-badge { font-size: 1.25rem; font-weight: 800; color: #fff; display: flex; align-items: center; gap: 10px; }
    .day-count-tag { font-size: 0.72rem; font-family: "JetBrains Mono", monospace; color: var(--amity-cyan); background: rgba(0, 210, 255, 0.1); border: 1px solid rgba(0, 210, 255, 0.25); padding: 4px 10px; border-radius: var(--radius-full); }
    .day-quote-box { margin-bottom: 20px; padding: 10px 14px; border-radius: var(--radius-lg); background: linear-gradient(135deg, rgba(0, 210, 255, 0.05), rgba(16, 185, 129, 0.03)); border: 1px solid rgba(0, 210, 255, 0.18); font-size: 0.82rem; color: #e2e8f0; font-style: italic; }
    .timeline-roster { position: relative; display: flex; flex-direction: column; gap: 16px; padding-left: 26px; }
    .timeline-roster::before { content: ""; position: absolute; top: 14px; bottom: 20px; left: 7px; width: 2px; background: linear-gradient(180deg, var(--amity-cyan) 0%, rgba(0, 210, 255, 0.15) 100%); }
    .timeline-item { position: relative; background: var(--surface-inset); border: 1px solid var(--border-subtle); border-radius: var(--radius-xl); padding: 16px 18px; display: flex; justify-content: space-between; align-items: center; gap: 16px; }
    .timeline-node { position: absolute; left: -26px; top: 24px; width: 14px; height: 14px; border-radius: 50%; background: var(--bg-canvas); border: 2.5px solid var(--amity-cyan); }
    .timeline-main-info { display: flex; flex-direction: column; gap: 4px; flex: 1; }
    .time-slot-badge { font-family: "JetBrains Mono", monospace; font-size: 0.78rem; font-weight: 700; color: var(--amity-cyan-light); }
    .course-title-row { display: flex; align-items: center; gap: 10px; margin-top: 2px; }
    .course-code-pill { font-size: 1.05rem; font-weight: 800; color: #fff; }
    .course-code-pill.econ { color: var(--subj-econ); }
    .course-code-pill.mgmt { color: var(--subj-mgmt); }
    .course-code-pill.acct { color: var(--subj-acct); }
    .course-code-pill.bc { color: var(--subj-bc); }
    .group-tag { font-size: 0.72rem; color: #fda4af; background: rgba(244, 63, 94, 0.1); border: 1px solid rgba(244, 63, 94, 0.25); padding: 2px 8px; border-radius: var(--radius-sm); font-family: "JetBrains Mono", monospace; }
    .faculty-info-text { font-size: 0.8rem; color: var(--text-muted); margin-top: 3px; }
    .venue-pill { background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.35); color: #6ee7b7; font-family: "JetBrains Mono", monospace; font-size: 0.82rem; font-weight: 700; padding: 8px 14px; border-radius: var(--radius-lg); display: flex; flex-direction: column; align-items: flex-end; text-align: right; }
    .venue-label { font-size: 0.62rem; text-transform: uppercase; color: var(--text-faint); }

    .calendar-card { background: var(--surface-card); border: 1px solid var(--border-subtle); border-radius: var(--radius-2xl); padding: 24px; }
    .calendar-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 20px; }
    .cal-title-wrapper { display: flex; align-items: center; gap: 12px; }
    .cal-title { font-size: 1.25rem; font-weight: 800; color: #fff; }
    .cal-nav-btns { display: flex; gap: 6px; }
    .cal-btn { background: var(--surface-inset); border: 1px solid var(--border-subtle); color: var(--text-main); padding: 6px 12px; border-radius: var(--radius-lg); font-size: 0.9rem; font-weight: 700; }
    .cal-grid { display: grid; grid-template-columns: repeat(7, 1fr); gap: 8px; text-align: center; }
    .cal-weekday { font-size: 0.75rem; font-weight: 800; color: var(--amity-cyan); padding: 8px 0; text-transform: uppercase; }
    .cal-day { background: transparent; border: none; padding: 10px 4px; font-family: "JetBrains Mono", monospace; font-size: 0.88rem; font-weight: 600; color: var(--text-muted); min-height: 48px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; }
    .cal-day:hover:not(.other-month) { color: #fff; background: rgba(0, 210, 255, 0.08); border-radius: var(--radius-lg); }
    .cal-day.other-month { opacity: 0.2; cursor: default; }
    .cal-day.today { color: var(--amity-cyan); font-weight: 800; background: rgba(0, 210, 255, 0.12); border-radius: var(--radius-lg); }
    .cal-day.yellow-holiday { color: #fef08a; font-weight: 800; background: var(--holiday-yellow-bg); border-radius: var(--radius-lg); }
    .cal-event-detail { margin-top: 20px; padding: 16px; border-radius: var(--radius-xl); background: var(--surface-inset); border: 1px solid var(--border-medium); display: flex; gap: 14px; }
    .cal-detail-icon { font-size: 1.5rem; }
    .cal-detail-content h4 { font-size: 0.92rem; font-weight: 700; color: #fff; margin-bottom: 4px; }
    .cal-detail-content p { font-size: 0.8rem; color: var(--text-muted); }
    .cal-legend { display: flex; gap: 16px; margin-top: 20px; padding-top: 16px; border-top: 1px solid var(--border-subtle); font-size: 0.76rem; color: var(--text-muted); }
    .legend-item { display: flex; align-items: center; gap: 6px; }
    .legend-dot { width: 8px; height: 8px; border-radius: 50%; }

    .bottom-actions { text-align: center; margin: 40px 0 16px; }
    .btn-reset { background: transparent; border: 1px solid rgba(255, 51, 102, 0.35); color: rgba(255, 51, 102, 0.85); font-size: 0.84rem; font-weight: 600; padding: 9px 24px; border-radius: var(--radius-full); }
    .developer-footer { text-align: center; margin-top: 48px; padding: 20px 16px; border-top: 1px solid var(--border-subtle); font-size: 0.8rem; color: var(--text-faint); display: flex; flex-direction: column; align-items: center; gap: 6px; }
    .developer-footer .dev-name { color: var(--amity-cyan-light); font-weight: 700; display: block; margin-top: 2px; }
    .developer-footer .dev-contacts { display: flex; gap: 16px; justify-content: center; font-family: "JetBrains Mono", monospace; font-size: 0.75rem; margin-top: 4px; }
    .developer-footer a { color: var(--text-muted); text-decoration: none; }
    .developer-footer a:hover { color: var(--amity-cyan); }
    .color-safe { color: var(--safe) !important; }
    .color-danger { color: var(--danger) !important; }
    .color-warning { color: var(--warning) !important; }
  `;
  document.head.appendChild(styleSheet);

  // Inject Markup Structure
  const appContainer = document.createElement('div');
  appContainer.className = 'page-wrapper';
  appContainer.innerHTML = `
    <section class="login-section active" id="view-login">
      <div class="login-card">
        <div class="login-logo-container">
          <img src="amity_logo.png" alt="Amity University Crest" class="login-uni-logo" />
        </div>
        <div class="login-uni-badge">AMITY UNIVERSITY</div>
        <h2>Student Portal Login</h2>
        <p>BBA (International Business) • Semester 1</p>

        <form class="login-form" onsubmit="handleLogin(event)">
          <div class="form-group">
            <label for="usernameInput">Username / Enrollment ID</label>
            <input type="text" id="usernameInput" class="form-input" value="LGOPJOD" readonly autocomplete="username">
          </div>
          <div class="form-group">
            <label for="passwordInput">Password</label>
            <input type="password" id="passwordInput" class="form-input" placeholder="Enter password (98900)" required autocomplete="current-password">
          </div>
          <button type="submit" class="btn-login">Sign In to Portal</button>
        </form>
      </div>
    </section>

    <div class="app-main-wrapper" id="appMainWrapper">
      <button class="sidebar-toggle-btn" id="sidebarToggle" onclick="toggleSidebar()" aria-label="Toggle Side Navigation">
        <span></span><span></span><span></span>
      </button>

      <div class="sidebar-backdrop" id="sidebarBackdrop" onclick="toggleSidebar()"></div>

      <aside class="sidebar" id="sidebar">
        <div class="sidebar-brand">
          <img src="amity_logo.png" alt="Amity Logo" class="sidebar-logo" />
          <div>
            <div class="sidebar-title">BBA (IB) Portal</div>
            <div class="sidebar-subtitle">Academic Suite</div>
          </div>
          <button class="sidebar-close-btn" onclick="toggleSidebar()" aria-label="Close Side Navigation">✕</button>
        </div>

        <nav class="sidebar-nav">
          <button class="nav-item active" id="nav-attendance" onclick="switchView('attendance')">
            <span class="nav-icon">📊</span><span>Attendance Tracker</span>
          </button>
          <button class="nav-item" id="nav-timetable" onclick="switchView('timetable')">
            <span class="nav-icon">⏰</span><span>Lecture Timetable</span>
          </button>
          <button class="nav-item" id="nav-calendar" onclick="switchView('calendar')">
            <span class="nav-icon">🗓️</span><span>Academic Calendar</span>
          </button>
        </nav>

        <div class="sidebar-footer">
          <div class="sidebar-dev-card">
            <div class="s-dev-title">Developer Details</div>
            <div class="s-dev-name">Lakshay Goyal</div>
            <a href="tel:+919890049803">📞 +91 9890049803</a>
            <a href="mailto:goyallakshay41@gmail.com">✉️ goyallakshay41@gmail.com</a>
          </div>
          <button class="btn-logout" onclick="handleLogout()">
            <span>🚪</span><span>Logout Portal</span>
          </button>
        </div>
      </aside>

      <button class="scroll-top-btn" id="scrollTopBtn" onclick="scrollToTop()" aria-label="Scroll to top of page">
        <svg class="scroll-progress-ring" viewBox="0 0 50 50">
          <circle class="scroll-track" cx="25" cy="25" r="23"></circle>
          <circle class="scroll-indicator" id="scrollIndicator" cx="25" cy="25" r="23"></circle>
        </svg>
        <svg class="arrow-icon" viewBox="0 0 24 24"><polyline points="18 15 12 9 6 15"></polyline></svg>
      </button>

      <div class="container">
        <header>
          <div class="logo-container">
            <img src="amity_logo.png" alt="Amity University Crest" class="uni-logo" />
          </div>
          <div class="uni-badge">AMITY UNIVERSITY</div>
          <h1 id="pageHeading">BBA (International Business)</h1>
          <p class="subtitle" id="pageSubHeading">Semester 1 • Academic Leave & Attendance Control</p>
        </header>

        <section id="view-attendance" class="view-section active">
          <div class="fixed-target-bar">
            <div>
              <div class="target-title">Statutory Eligibility Threshold</div>
              <div class="target-desc">Minimum 75% physical attendance required across all modules</div>
            </div>
            <div class="fixed-badge">75%</div>
          </div>

          <div class="summary-card">
            <div class="summary-item"><h3>Total Conducted</h3><p id="overallHeld">0</p></div>
            <div class="summary-item"><h3>Attended</h3><p id="overallAttended" class="color-safe">0</p></div>
            <div class="summary-item"><h3>Absent</h3><p id="overallAbsent" class="color-danger">0</p></div>
            <div class="summary-item"><h3>Term Score</h3><p id="overallPercent">0.00%</p></div>
          </div>

          <main class="subject-list" id="subjectsContainer" role="main"></main>

          <div class="bottom-actions">
            <button class="btn-reset" onclick="resetAll()">Reset All Records to Zero</button>
          </div>
        </section>

        <section id="view-timetable" class="view-section">
          <div class="timetable-wrapper">
            <div class="tt-header-card">
              <div class="tt-meta-row">
                <div class="tt-title-group">
                  <h2><span>🗓️</span> Weekly Lecture Roster</h2>
                  <p>Verified AmiZone Schedule • Room I3-209 • 11 Sessions Weekly</p>
                </div>
              </div>
              <div class="tt-pills-row">
                <button class="tt-day-pill active" onclick="filterTimetableDay('all', this)">All Days</button>
                <button class="tt-day-pill" onclick="filterTimetableDay('mon', this)">Monday</button>
                <button class="tt-day-pill" onclick="filterTimetableDay('tue', this)">Tuesday</button>
                <button class="tt-day-pill" onclick="filterTimetableDay('wed', this)">Wednesday</button>
                <button class="tt-day-pill" onclick="filterTimetableDay('thu', this)">Thursday</button>
                <button class="tt-day-pill" onclick="filterTimetableDay('fri', this)">Friday</button>
              </div>
            </div>

            <article class="tt-day-card" data-day="mon">
              <div class="day-banner-header">
                <div class="day-name-badge"><span>📅 Monday</span><span class="day-count-tag">2 Classes</span></div>
                <span style="font-size:0.75rem; color:var(--text-muted);">Block I3</span>
              </div>
              <div class="day-quote-box" id="quote-mon">Loading motivation...</div>
              <div class="timeline-roster">
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 10:15 to 11:10</div>
                    <div class="course-title-row"><span class="course-code-pill econ">ECON101</span><span class="group-tag">AIBS-ECON101 -E</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Dr Pallab Sikdar (312615)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 13:15 to 14:10</div>
                    <div class="course-title-row"><span class="course-code-pill mgmt">MGMT109</span><span class="group-tag">AIBS-MGMT109-E</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Dr Ravneet Singh Bhandari (309397)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
              </div>
            </article>

            <article class="tt-day-card" data-day="tue">
              <div class="day-banner-header">
                <div class="day-name-badge"><span>📅 Tuesday</span><span class="day-count-tag">2 Classes</span></div>
                <span style="font-size:0.75rem; color:var(--text-muted);">Block I3</span>
              </div>
              <div class="day-quote-box" id="quote-tue">Loading motivation...</div>
              <div class="timeline-roster">
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 11:15 to 12:10</div>
                    <div class="course-title-row"><span class="course-code-pill acct">ACCT102</span><span class="group-tag">AIBS-ACCT102 -E</span></div>
                    <div class="faculty-info-text"><span>👩‍🏫 Prof.(Dr) Navleen Kaur (2835)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 12:15 to 13:10</div>
                    <div class="course-title-row"><span class="course-code-pill mgmt">MGMT109</span><span class="group-tag">AIBS-MGMT109-E</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Dr Ravneet Singh Bhandari (309397)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
              </div>
            </article>

            <article class="tt-day-card" data-day="wed">
              <div class="day-banner-header">
                <div class="day-name-badge"><span>📅 Wednesday</span><span class="day-count-tag">2 Classes</span></div>
                <span style="font-size:0.75rem; color:var(--text-muted);">Block I3</span>
              </div>
              <div class="day-quote-box" id="quote-wed">Loading motivation...</div>
              <div class="timeline-roster">
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 10:15 to 11:10</div>
                    <div class="course-title-row"><span class="course-code-pill bc">BC109</span><span class="group-tag">AICC-BC109-BQ</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Mr Marut Bisht (305140)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 12:15 to 13:10</div>
                    <div class="course-title-row"><span class="course-code-pill mgmt">MGMT109</span><span class="group-tag">AIBS-MGMT109-E</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Dr Ravneet Singh Bhandari (309397)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
              </div>
            </article>

            <article class="tt-day-card" data-day="thu">
              <div class="day-banner-header">
                <div class="day-name-badge"><span>📅 Thursday</span><span class="day-count-tag">2 Classes</span></div>
                <span style="font-size:0.75rem; color:var(--text-muted);">Block I3</span>
              </div>
              <div class="day-quote-box" id="quote-thu">Loading motivation...</div>
              <div class="timeline-roster">
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 11:15 to 12:10</div>
                    <div class="course-title-row"><span class="course-code-pill acct">ACCT102</span><span class="group-tag">AIBS-ACCT102 -E</span></div>
                    <div class="faculty-info-text"><span>👩‍🏫 Prof.(Dr) Navleen Kaur (2835)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 13:15 to 14:10</div>
                    <div class="course-title-row"><span class="course-code-pill econ">ECON101</span><span class="group-tag">AIBS-ECON101 -E</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Dr Pallab Sikdar (312615)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
              </div>
            </article>

            <article class="tt-day-card" data-day="fri">
              <div class="day-banner-header">
                <div class="day-name-badge"><span>📅 Friday</span><span class="day-count-tag">3 Classes</span></div>
                <span style="font-size:0.75rem; color:var(--text-muted);">Block I3</span>
              </div>
              <div class="day-quote-box" id="quote-fri">Loading motivation...</div>
              <div class="timeline-roster">
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 10:15 to 11:10</div>
                    <div class="course-title-row"><span class="course-code-pill bc">BC109</span><span class="group-tag">AICC-BC109-BQ</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Mr Marut Bisht (305140)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 11:15 to 12:10</div>
                    <div class="course-title-row"><span class="course-code-pill acct">ACCT102</span><span class="group-tag">AIBS-ACCT102 -E</span></div>
                    <div class="faculty-info-text"><span>👩‍🏫 Prof.(Dr) Navleen Kaur (2835)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
                <div class="timeline-item">
                  <span class="timeline-node"></span>
                  <div class="timeline-main-info">
                    <div class="time-slot-badge">⏰ 13:15 to 14:10</div>
                    <div class="course-title-row"><span class="course-code-pill econ">ECON101</span><span class="group-tag">AIBS-ECON101 -E</span></div>
                    <div class="faculty-info-text"><span>👨‍🏫 Dr Pallab Sikdar (312615)</span></div>
                  </div>
                  <div class="venue-pill"><span class="venue-label">Hall</span><span>I3 - 209</span></div>
                </div>
              </div>
            </article>
          </div>
        </section>

        <section id="view-calendar" class="view-section">
          <div class="calendar-card">
            <div class="calendar-header">
              <div class="cal-title-wrapper">
                <div class="cal-title" id="calMonthTitle">Academic Calendar</div>
                <div class="uni-badge" style="margin:0;">2026 TERM</div>
              </div>
              <div class="cal-nav-btns">
                <button class="cal-btn" onclick="prevMonth()">‹</button>
                <button class="cal-btn" onclick="nextMonth()">›</button>
              </div>
            </div>
            <div class="cal-grid" id="calGrid"></div>
            <div class="cal-event-detail" id="calEventDetail">
              <div class="cal-detail-icon" id="detailIcon">📅</div>
              <div class="cal-detail-content">
                <h4 id="detailTitle">Select any date</h4>
                <p id="detailDesc">Click on any date to inspect details. Highlighted dates represent statutory university holidays.</p>
              </div>
            </div>
            <div class="cal-legend">
              <div class="legend-item"><div class="legend-dot" style="background:var(--amity-cyan);"></div> Current Day</div>
              <div class="legend-item"><div class="legend-dot" style="background:var(--holiday-yellow);"></div> University Holiday</div>
            </div>
          </div>
        </section>
      </div>

      <footer class="developer-footer">
        <div>Developed with precision by</div>
        <div class="dev-name">Lakshay Goyal</div>
        <div class="dev-contacts">
          <a href="tel:+919890049803">📞 +91 9890049803</a>
          <span>•</span>
          <a href="mailto:goyallakshay41@gmail.com">✉️ goyallakshay41@gmail.com</a>
        </div>
      </footer>
    </div>
  `;
  document.body.appendChild(appContainer);

  // Application Script Logic
  window.handleLogin = function(event) {
    event.preventDefault();
    const pass = document.getElementById("passwordInput").value.trim();
    if (pass === "98900") {
      document.getElementById("view-login").classList.remove("active");
      document.getElementById("appMainWrapper").classList.add("active");
      loadData();
      render();
      updateTimetableQuotes();
      updateScrollProgress();
    } else {
      alert("Invalid password! Please use Password: 98900");
    }
  };

  window.handleLogout = function() {
    document.getElementById("appMainWrapper").classList.remove("active");
    document.getElementById("view-login").classList.add("active");
    document.getElementById("passwordInput").value = "";
    toggleSidebar();
  };

  const CIRCLE_CIRCUMFERENCE = 144.51;
  window.scrollToTop = function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  window.updateScrollProgress = function() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    const indicator = document.getElementById("scrollIndicator");
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    if (scrollBtn) {
      if (scrollY > 200) scrollBtn.classList.add("visible");
      else scrollBtn.classList.remove("visible");
    }
    if (indicator && scrollHeight > 0) {
      const scrollPercent = Math.min(1, Math.max(0, scrollY / scrollHeight));
      indicator.style.strokeDashoffset = CIRCLE_CIRCUMFERENCE - (scrollPercent * CIRCLE_CIRCUMFERENCE);
    }
  };

  window.addEventListener("scroll", updateScrollProgress);
  window.addEventListener("resize", updateScrollProgress);

  const DAILY_TIMETABLE_QUOTES = [
    "Discipline is the bridge between college goals and career accomplishments.",
    "Show up relentlessly; every single class today builds your future executive stature.",
    "You don't have to be extreme, just consistent. Protect your morning streak.",
    "The secret of getting ahead is simply getting started right on time.",
    "Small disciplines repeated with consistency every day lead to great achievements.",
    "Your seat in the lecture hall is your investment in tomorrow's leadership.",
    "Do something today that your future semester-end self will thank you for.",
    "Excellence is not an isolated act, but an ingrained daily routine.",
    "Energy flows where attention goes. Be completely present in each roll call.",
    "The pain of self-discipline hurts far less than the sting of debarment."
  ];

  window.updateTimetableQuotes = function() {
    const now = new Date();
    const epochDays = Math.floor(now.getTime() / (1000 * 60 * 60 * 24));
    ['mon', 'tue', 'wed', 'thu', 'fri'].forEach((day, index) => {
      const quote = DAILY_TIMETABLE_QUOTES[(epochDays + index + 1) % DAILY_TIMETABLE_QUOTES.length];
      const el = document.getElementById(`quote-${day}`);
      if (el) el.innerText = `${quote}”`;
    });
  };

  window.filterTimetableDay = function(day, btn) {
    document.querySelectorAll(".tt-day-pill").forEach(p => p.classList.remove("active"));
    if (btn) btn.classList.add("active");
    document.querySelectorAll(".tt-day-card").forEach(card => {
      if (day === "all" || card.getAttribute("data-day") === day) card.classList.remove("hidden");
      else card.classList.add("hidden");
    });
  };

  window.toggleSidebar = function() {
    const sidebar = document.getElementById("sidebar");
    const backdrop = document.getElementById("sidebarBackdrop");
    const toggleBtn = document.getElementById("sidebarToggle");
    const isOpen = sidebar.classList.toggle("open");
    backdrop.classList.toggle("active", isOpen);
    if (toggleBtn) toggleBtn.classList.toggle("hidden", isOpen);
  };

  window.switchView = function(viewName) {
    document.querySelectorAll(".view-section").forEach(sec => sec.classList.remove("active"));
    document.querySelectorAll(".nav-item").forEach(btn => btn.classList.remove("active"));
    const heading = document.getElementById("pageHeading");
    const subHeading = document.getElementById("pageSubHeading");

    if (viewName === "attendance") {
      document.getElementById("view-attendance").classList.add("active");
      document.getElementById("nav-attendance").classList.add("active");
      heading.innerText = "BBA (International Business)";
      subHeading.innerText = "Semester 1 • Academic Leave & Attendance Control";
    } else if (viewName === "timetable") {
      document.getElementById("view-timetable").classList.add("active");
      document.getElementById("nav-timetable").classList.add("active");
      heading.innerText = "Weekly Time Schedule";
      subHeading.innerText = "AmiZone Verified • Room I3-209 • BBA IB Sem 1";
      updateTimetableQuotes();
    } else if (viewName === "calendar") {
      document.getElementById("view-calendar").classList.add("active");
      document.getElementById("nav-calendar").classList.add("active");
      heading.innerText = "Academic Calendar";
      subHeading.innerText = "Semester 1 Schedule & Holidays";
      renderCalendar();
    }
    toggleSidebar();
  };

  let currentCalDate = new Date();
  const ACADEMIC_EVENTS = {
    "2026-09-04": { title: "Janmashtami", type: "yellow-holiday", icon: "🪔", desc: "University Holiday on account of Janmashtami." },
    "2026-10-02": { title: "Mahatma Gandhi's Birthday", type: "yellow-holiday", icon: "🕊️", desc: "National Holiday on account of Gandhi Jayanti." },
    "2026-10-20": { title: "Dussehra", type: "yellow-holiday", icon: "🏹", desc: "University Holiday on account of Dussehra." },
    "2026-11-08": { title: "Diwali", type: "yellow-holiday", icon: "🪔", desc: "University Holiday on account of Diwali." },
    "2026-12-25": { title: "Christmas Day", type: "yellow-holiday", icon: "🎄", desc: "Gazetted University Holiday on account of Christmas Day." }
  };

  window.prevMonth = function() { currentCalDate.setMonth(currentCalDate.getMonth() - 1); renderCalendar(); };
  window.nextMonth = function() { currentCalDate.setMonth(currentCalDate.getMonth() + 1); renderCalendar(); };

  window.selectCalendarDate = function(dateKey) {
    document.querySelectorAll(".cal-day").forEach(el => el.classList.remove("selected"));
    const targetEl = document.getElementById(`cal-cell-${dateKey}`);
    if (targetEl) targetEl.classList.add("selected");
    const eventData = ACADEMIC_EVENTS[dateKey];
    document.getElementById("detailIcon").innerText = eventData ? eventData.icon : "📅";
    document.getElementById("detailTitle").innerText = eventData ? `${eventData.title} (${dateKey})` : `Date: ${dateKey}`;
    document.getElementById("detailDesc").innerText = eventData ? eventData.desc : "Regular working day. Attend scheduled lectures.";
  };

  window.renderCalendar = function() {
    const year = currentCalDate.getFullYear();
    const month = currentCalDate.getMonth();
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById("calMonthTitle").innerText = `${monthNames[month]} ${year}`;
    const grid = document.getElementById("calGrid");
    grid.innerHTML = "";

    ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].forEach(day => {
      const d = document.createElement("div"); d.className = "cal-weekday"; d.innerText = day; grid.appendChild(d);
    });

    const firstDayIndex = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const prevDaysInMonth = new Date(year, month, 0).getDate();
    const realTodayKey = `${new Date().getFullYear()}-${String(new Date().getMonth() + 1).padStart(2, '0')}-${String(new Date().getDate()).padStart(2, '0')}`;

    for (let i = firstDayIndex - 1; i >= 0; i--) {
      const cell = document.createElement("div"); cell.className = "cal-day other-month"; cell.innerHTML = `<span>${prevDaysInMonth - i}</span>`; grid.appendChild(cell);
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const cell = document.createElement("div");
      const dateKey = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
      cell.id = `cal-cell-${dateKey}`;
      cell.className = "cal-day";
      if (dateKey === realTodayKey) cell.classList.add("today");
      if (ACADEMIC_EVENTS[dateKey]) cell.classList.add(ACADEMIC_EVENTS[dateKey].type);
      cell.innerHTML = `<span>${d}</span>`;
      cell.onclick = () => selectCalendarDate(dateKey);
      grid.appendChild(cell);
    }
  };

  const TARGET = 75, TARGET_RATIO = 0.75, STORAGE_KEY = "amity_bba_punch_attendance";
  let subjects = [];

  function loadData() {
    const saved = localStorage.getItem(STORAGE_KEY);
    subjects = saved ? JSON.parse(saved) : [
      { id: "ACCT102", name: "Accounting Fundamentals", totalPlanned: 45, minRequired: 34, present: 0, absent: 2 },
      { id: "BC109", name: "Communication Skills - 1", totalPlanned: 30, minRequired: 23, present: 0, absent: 2 },
      { id: "ECON101", name: "Economics for Managers", totalPlanned: 45, minRequired: 34, present: 0, absent: 2 },
      { id: "MGMT109", name: "Introduction to Management", totalPlanned: 45, minRequired: 34, present: 0, absent: 3 }
    ];
  }
  function saveData() { localStorage.setItem(STORAGE_KEY, JSON.stringify(subjects)); }

  window.toggleSlot = function(subIdx, slotIdx) {
    const sub = subjects[subIdx];
    sub.absent = (sub.absent === slotIdx + 1) ? slotIdx : slotIdx + 1;
    updateAll();
  };
  window.adjustPresent = function(idx, amt) { if (!(amt < 0 && subjects[idx].present <= 0)) { subjects[idx].present += amt; updateAll(); } };
  window.adjustAbsent = function(idx, amt) { if (!(amt < 0 && subjects[idx].absent <= 0)) { subjects[idx].absent += amt; updateAll(); } };
  window.editManual = function(idx) {
    const sub = subjects[idx];
    const p = prompt(`[${sub.id}] Enter attended:`, sub.present); if (p === null) return;
    const a = prompt(`[${sub.id}] Enter missed:`, sub.absent); if (a === null) return;
    if (!isNaN(p) && p >= 0 && !isNaN(a) && a >= 0) { sub.present = parseInt(p, 10); sub.absent = parseInt(a, 10); updateAll(); }
  };
  window.resetAll = function() { if (confirm("Reset records?")) { subjects.forEach(s => { s.present = 0; s.absent = 0; }); updateAll(); } };
  function updateAll() { saveData(); render(); }

  function render() {
    const container = document.getElementById("subjectsContainer");
    if (!container) return;
    container.innerHTML = "";
    let heldSum = 0, attendedSum = 0;

    subjects.forEach((sub, index) => {
      const held = sub.present + sub.absent;
      heldSum += held; attendedSum += sub.present;
      const pct = held > 0 ? (sub.present / held) * 100 : 100;
      const isSafe = pct >= TARGET;
      const totalLeaves = Math.floor(sub.totalPlanned * (1 - TARGET_RATIO));
      const usedPct = Math.min(100, Math.round((sub.absent / totalLeaves) * 100));

      const card = document.createElement("article");
      card.className = "subject-card";
      card.innerHTML = `
        <div class="card-header">
          <div><h2 class="sub-title">${sub.name}</h2><div class="sub-code">${sub.id} • ${sub.totalPlanned} Total</div></div>
          <div class="percent-badge ${isSafe ? 'color-safe' : 'color-danger'}"><span>${isSafe ? '🟢' : '🔴'}</span><span>${held === 0 ? "100.00%" : pct.toFixed(2) + "%"}</span></div>
        </div>
        <div class="ratio-wrapper">
          <div class="ratio-labels"><span class="ratio-used-lbl">Used: ${sub.absent}</span><span class="ratio-left-lbl">Left: ${Math.max(0, totalLeaves - sub.absent)}</span></div>
          <div class="ratio-bar"><div class="bar-used" style="width: ${usedPct}%;"></div><div class="bar-left" style="width: ${100 - usedPct}%;"></div></div>
        </div>
        <div class="stats-grid">
          <div><div class="stat-label">Held</div><div class="stat-val">${held}</div></div>
          <div><div class="stat-label">Present</div><div class="stat-val color-safe">${sub.present}</div></div>
          <div><div class="stat-label">Absent</div><div class="stat-val color-danger">${sub.absent}</div></div>
          <div><div class="stat-label">Buffer</div><div class="stat-val">${totalLeaves - sub.absent}</div></div>
          <div><div class="stat-label">Left</div><div class="stat-val">${Math.max(0, sub.totalPlanned - held)}</div></div>
        </div>
        <div class="punch-card-section">
          <div class="punch-header"><span>LEAVE STAMP CARD</span></div>
          <div class="slots">${Array.from({length: totalLeaves}, (_, i) => `<div class="slot ${i < sub.absent ? 'used' : 'blank'}" onclick="toggleSlot(${index}, ${i})">✕</div>`).join('')}</div>
        </div>
        <div class="controls-container">
          <div class="controls-row">
            <div class="control-group"><button class="btn-step-minus" onclick="adjustPresent(${index}, -1)">−</button><button class="btn-step-add btn-present-add" onclick="adjustPresent(${index}, 1)">+ Present</button></div>
            <div class="control-group"><button class="btn-step-minus" onclick="adjustAbsent(${index}, -1)">−</button><button class="btn-step-add btn-absent-add" onclick="adjustAbsent(${index}, 1)">+ Absent</button></div>
          </div>
          <div class="secondary-row"><button class="btn-edit-manual" onclick="editManual(${index})">✎ Adjust Exact Values</button></div>
        </div>
      `;
      container.appendChild(card);
    });

    document.getElementById("overallHeld").innerText = heldSum;
    document.getElementById("overallAttended").innerText = attendedSum;
    document.getElementById("overallAbsent0") || (document.getElementById("overallAbsent").innerText = heldSum - attendedSum);
    const overallPct = heldSum > 0 ? (attendedSum / heldSum) * 100 : 100;
    const overallElem = document.getElementById("overallPercent");
    overallElem.innerText = overallPct.toFixed(2) + "%";
    overallElem.className = overallPct >= TARGET ? "color-safe" : "color-danger";
  };
})();
