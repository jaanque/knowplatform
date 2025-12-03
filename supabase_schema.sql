-- Create the table for files
create table public.files (
  id uuid default gen_random_uuid() primary key,
  name text not null,
  size text not null,
  downloads int default 0,
  type text not null, -- 'archive', 'doc', 'software', 'iso', 'img', 'audio'
  uploader text not null,
  description text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  download_url text
);

-- Insert sample data
insert into public.files (name, size, downloads, type, uploader, description) values
('obs-studio-29.0.zip', '128 MB', 2400000, 'archive', 'OpenSource', 'Open Broadcaster Software for video recording and live streaming.'),
('project-proposal-v2.pdf', '2.4 MB', 54000, 'doc', 'AliceM', 'Updated proposal for Q3 marketing initiatives.'),
('lofi-beats-collection.mp3', '85 MB', 120000, 'audio', 'MusicLover', 'A collection of relaxing lofi beats for coding.'),
('ubuntu-24.04-desktop.iso', '4.2 GB', 8100000, 'iso', 'Canonical', 'The latest LTS release of Ubuntu Desktop.'),
('gimp-setup.exe', '250 MB', 900000, 'software', 'GimpTeam', 'GNU Image Manipulation Program installer for Windows.'),
('nature-wallpapers-4k.zip', '1.2 GB', 320000, 'img', 'PhotoArt', 'High resolution nature wallpapers pack.'),
('annual-report-2023.pdf', '5.1 MB', 12000, 'doc', 'FinanceDept', 'Detailed financial report for fiscal year 2023.'),
('installer-win.msi', '45 MB', 300000, 'software', 'DevOps', 'Generic installer package for internal tools.');
