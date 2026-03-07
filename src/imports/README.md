# Logic Pro Tracker

Logic Pro Tracker is a local macOS app that tracks your Logic Pro work sessions, project progress, plugins, and bounce deliverables.

- Local-first
- No telemetry
- No cloud sync

## Logic Pro Compatibility

- Platform: macOS
- Project format: `.logicx` bundles
- Detection and metadata parsing are built around Logic Pro projects that contain:
  - `Alternatives/000/MetaData.plist` for current BPM/key/time signature
  - standard project-adjacent `Bounces/` folders for deliverables
- There is no hard-coded Logic version gate in code. Compatibility depends on the `.logicx` bundle structure above.
- Legacy non-`.logicx` project formats are not supported.

## What You Get

### Overview

- Total Time, Work Time, and Inactive Time cards
- Time series charts for:
  - Time Tracked
  - Most Time Tracked
  - Project Progress
  - Optional charts: Bounces Over Time, Activity Heatmap, Top Plugins (Time-Weighted)
- Filters:
  - Folder
  - Stage
  - Work mode (`Work`, `Total`, `Inactive`)
  - Date range (`7d`, `30d`, `90d`, `All`, or custom start/end)

### Plugins

- Plugin usage across:
  - Tracked Projects
  - All Projects
- Date range filtering uses:
  - `file_modified_at` first
  - fallback to `last_opened_at`
  - fallback to `created_at`
- Category editing when auto-detection is wrong
  - Drag and drop
  - Right-click move/remove
  - Save/cancel batch edits
- Charts:
  - Top Plugins
  - Plugins by Folder
  - Plugins by Stage
- Same folder/stage/date-range filtering model
- `All Projects` defaults range to `All` when you switch tabs, then you can still pick any range/date

### Library

- Project table with key metadata (BPM, key, time signature, tracks, size, modified dates)
- If a project has additional manual metadata values, table labels show `<value> (multiple)`
- Date range filtering uses:
  - `file_modified_at` first
  - fallback to `last_opened_at`
  - fallback to latest snapshot capture time
  - fallback to `created_at`
- Filters and controls:
  - Folder / Stage
  - Key / time signature
  - BPM range
  - search + sorting + pagination
- Key/time signature/BPM filters and distributions include both:
  - detected snapshot values
  - manual values added in Project Detail
- Charts for distribution and top projects
- `All Projects` lets you add projects back into tracked scope
- `All Projects` defaults range to `All` when you switch tabs, then you can still pick any range/date

### Deliverables

- Recent bounce files with:
  - quick play/stop
  - duration
  - project link
  - folder/stage/key/BPM/time sig context
  - date + size
- Tags per bounce:
  - quick add/edit
  - right-click remove
- Date range filtering uses bounce modified date (fallback to capture time)
- `All Projects` defaults range to `All` when you switch tabs, then you can still pick any range/date
- Charts:
  - Bounces by Folder
  - Bounces by Stage
  - Bounces by Tag
- Filters:
  - Folder / Stage
  - date range
  - key
  - tag
  - sort mode
- Key filter and row labels use detected values plus any manual metadata values from Project Detail
- When there are multiple values for BPM/key/time sig, Deliverables labels show `<value> (multiple)`
- Switching `Tracked Projects` / `All Projects` can run a full Deliverables sync, then refresh list/charts
- Auto sync on tab switch is throttled to avoid repeated rescans when switching rapidly
- Folder and stage filter changes do not trigger full rescans
- Refresh button runs a scoped rescan on demand
- Deliverables list loads in fast windows (`50` rows initially, then `Load more`)

### Project Detail

- Project metadata chips near title (BPM, time sig, key, sample rate)
- Metadata chips show up to 3 values per field, then `+N` overflow
- `i` metadata button opens a popover where you can add/remove extra BPM/key/time sig values
- Detected base values from Logic metadata stay read-only and are not replaced by manual values
- Last opened line includes file size and project age
- Stage selector
- Two compact summary cards:
  - Time tracked
  - Total tracks and audio files
- Progress chart (tracks/audio over range)
- Bounce list with playback and tags
- Notes panel with save
- Session history

### Settings

- Connect and scan Logic project folders (Library Source)
- Source suggestions prioritize:
  - roots inferred from your tracked project paths
  - common macOS Logic locations under `~/Music`
- Check Automation permission
- App behavior toggles:
  - Start hidden in Dock
  - Open window when Logic opens
  - Close app when Logic closes
  - Hide to Dock when window closes
  - Track inactive time (on/off)
  - Idle threshold in seconds (`30..7200`, default `300`)

## How Tracking Works

- Monitor loop runs every 5 seconds while app is running.
- Opening a Logic project while Tracker is running starts/continues tracking for that project.
- Snapshots are captured periodically and on save changes.
- Bounce files are scanned and added automatically.
- Library source scans also index project `Bounces/` folders in the same pass.
- BPM, key, and time signature are read from Logic `MetaData.plist` for the latest snapshot value.
- Optional manual BPM/key/time signature values are saved locally per project and merged into Library/Deliverables labels and filters.
- On first app launch cycle, main content shows a minimal skeleton until core data has loaded.
- Inactive time is counted only when:
  - system input is idle for at least the configured threshold
  - Logic is not playing
  - Logic is not recording

## First-Time Setup

1. Launch Logic Pro Tracker.
2. Open **Settings**.
3. In **Library Source**, connect your Logic projects folder.
4. Run a scan.
5. Open Logic projects normally. Tracker will detect open projects and log sessions.

## Permissions

Automation permission is recommended on macOS.

Used for:

- reliable open-project detection in Logic
- playback/record transport checks used in active/inactive time handling

Without permission, core tracking still runs, but project and transport detection can be less reliable.

## Data and Privacy

- Database path:
  - `~/Library/Application Support/com.dawtracker.app/tracker.db`
- Data stays on your machine.
- No external service dependency for tracking analytics.

## Build From Source

```bash
npm ci
npm run tauri dev
```

Production build:

```bash
npm run tauri build
```

Output bundles are under:

- `src-tauri/target/release/bundle/`
