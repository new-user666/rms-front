interface Props {
    className: string;
  }
  
  export function SectionIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'}    viewBox="0 0 24 24"><path  d="M22.5 1h-21a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5zM15 2v9.5H2V2h13zM2 12.5h13V22H2v-9.5zM22 22h-6V2h6v20z"/><linearGradient id="a" x1="-1.1" x2="25.1" y1="5.892" y2="18.108" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#fff" stop-opacity=".2"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient><path d="M22.5 1h-21a.5.5 0 00-.5.5v21a.5.5 0 00.5.5h21a.5.5 0 00.5-.5v-21a.5.5 0 00-.5-.5zM15 2v9.5H2V2h13zM2 12.5h13V22H2v-9.5zM22 22h-6V2h6v20z"/></svg>
    );
  }
  
  export function Dashboard(props: Props) {
    return (
      <svg height={'2em'} viewBox="0 -960 960 960" fill="currentColor"><path d="M240-240h220v-160H240v160zm0-200h220v-280H240v280zm260 200h220v-280H500v280zm0-320h220v-160H500v160zM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v80h80v80h-80v80h80v80h-80v80h80v80h-80v80q0 33-23.5 56.5T760-120H200zm0-80h560v-560H200v560zm0-560v560-560z"/></svg>
    
    );
  }
  
  export function CandidatesIcon(props: Props) {
    return (
      <svg fillRule="evenodd"  fill="currentColor" height={'2em'} clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 1707 1707"><path d="M1216 706c-41-82-34-155 44-177-3-16-9-37 7-48 7-4 16-5 24 0 11 6 38 7 62 7 52 1 116 2 143 52 15 6 42 20 54 50 14 32 7 72-19 117v74c0 53-27 101-68 129l6 11h40c109 0 198 89 198 198v175c0 12-11 23-23 23H23c-13 0-23-11-23-23v-175c0-109 89-198 198-198h39l7-11c-42-28-68-76-68-129v-75c-29-57-34-102-14-136 14-24 38-36 57-41-3-16-9-38 7-48 7-4 16-5 24 0 11 6 38 7 62 7 52 1 116 2 143 52 15 6 42 20 54 50 14 32 8 72-19 117v74c0 53-27 101-68 129l6 11c46 0 85-1 127 20 62-58 117-59 194-59l9-15c-47-31-77-83-77-143v-83c-32-63-37-113-15-149 16-28 43-40 64-46-3-16-11-41 6-52 7-5 16-5 24-1 12 8 42 8 70 9 58 1 128 2 157 57 16 6 46 22 60 54 15 35 8 79-22 129v82c0 60-30 112-76 143l9 15c77 0 132 1 194 59 42-21 81-20 126-20l7-11c-77-53-69-123-69-204zm-729 372c4-36 17-72 37-101-31-12-64-11-97-11-25 34-41 60-51 77-16 26-24 40-43 40s-27-14-43-40c-11-17-26-43-51-77h-41c-84 0-153 69-153 153v31h76c0-17-2-40 22-40 31 0 23 43 23 63v98h320c0-40-2-157 1-193zM278 942c28 39 40 60 55 84 15-24 26-45 55-84l-7-12c-30 10-66 10-97 0l-6 12zm299 41c-23 32-36 47-43 86-4 22-2 46-2 68h88c0-18-2-45 23-45 30 0 23 43 23 68v111h39V928c-50 0-96 20-128 55zM45 1271h76v-75H45v75zm238-390c36 14 63 16 100 0 36-19 62-57 62-100v-77c-5-28-48-80-100-46-22 14-40-23-78-8-21 8-38 28-46 54v77c0 44 25 81 62 100zm184-233c20-67-41-57-50-81-16-42-100-30-150-36 4 9 8 15 4 25-12 26-50 3-70 38-7 12-8 30-1 52 32-42 85-57 133-33 49-25 103-8 134 35zm330 190c41 16 72 18 112 0 42-21 71-64 71-114v-86c-5-30-53-92-114-52-24 15-42-26-87-9-24 8-44 32-52 61v86c0 50 28 93 70 114zm1 49l-9 16c34 47 46 68 64 99 19-31 31-52 65-99l-10-16c-34 12-75 12-110 0zm-93-307c34-48 94-67 148-40 56-28 116-8 150 43 16-46-4-75-38-83-34-9 14-51-135-53-19 0-37 0-53-2 3 10 10 17 5 29-11 26-55 2-77 41-9 15-9 37 0 65zm470 691v-89h-89v89h89zm-134 0v-156c0-29 45-30 45 0v22h89c0-65-1-100-46-154-29-36-79-55-128-55v343h40zm142-294c23 35 37 77 37 122v172h321v-138c0-30 45-30 45 0v17h75v-31c0-84-68-153-152-153h-41c-25 34-41 60-51 77-16 26-25 40-43 40-19 0-28-14-43-40-11-17-26-43-51-77-33 0-66-1-97 11zm-651 294h88v-89h-88v89zm219 0h205V928c-28 38-45 67-57 86-17 28-26 44-46 44-19 0-28-16-45-44-12-19-29-48-57-86v343zm734-567c-14-46-56-74-99-46-23 14-40-23-79-8-20 8-37 28-45 54v77c0 87 86 134 162 100 36-19 61-57 61-100v-77zm-111 234c-17 0-33-3-49-8l-6 12c28 39 40 60 55 84 15-24 26-45 55-84l-7-12c-15 5-31 8-48 8zm134-290c20-67-41-57-50-81-16-42-100-30-150-35 3 8 8 14 4 24-12 26-50 3-70 38-7 12-8 30-1 52 32-42 84-57 133-33 49-25 102-8 134 35zm78 623h75v-75h-75v75z"/></svg>
   
    );
  }
  
  export function CategoryIcon(props: Props) {
    return (
      <svg viewBox="0 0 19 20" height={'2em'}><g fillRule="evenodd"><path d="M-3-2h24v24H-3z"/><path fill="currentColor" d="M8.15 1.4a.993.993 0 011.7 0l3.71 6.08c.41.66-.07 1.52-.85 1.52H5.28c-.78 0-1.26-.86-.85-1.52L8.15 1.4zM14.5 20a4.5 4.5 0 110-9 4.5 4.5 0 010 9zM1 19.5c-.55 0-1-.45-1-1v-6c0-.55.45-1 1-1h6c.55 0 1 .45 1 1v6c0 .55-.45 1-1 1H1z"/></g></svg>
   
    );
  }
  
  export function CredentialIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'}  viewBox="0 0 1024 1024" version="1.1"><path d="M298.666667 725.333333a213.632 213.632 0 0 0 208.981333-170.666666H597.333333v85.333333h85.333334v-85.333333h85.333333v128h85.333333v-128h85.333334v-85.333334H507.648A213.632 213.632 0 0 0 298.666667 298.666667c-117.632 0-213.333333 95.701333-213.333334 213.333333s95.701333 213.333333 213.333334 213.333333z m0-341.333333c70.570667 0 128 57.429333 128 128s-57.429333 128-128 128-128-57.429333-128-128 57.429333-128 128-128z" fill=""/></svg>
    
    );
  }
  
  export function SettingsIcon(props: Props) {
    return (
       <svg viewBox="0 0 256 256" height={'2rem'}><path fill-opacity="0" stroke="currentColor" stroke-dasharray="1458,1458" strokeLinecap="round" strokeLinejoin="round" strokeWidth="6" d="M130.1 10.2c-19 1.9-30.3 4.7-42.2 10.7-15.2 7.5-26.6 19-33.6 33.4-5 10.2-7.5 20.9-8.3 35.3-.6 10.8-2 16.1-5.7 22.2-1.7 2.8-5.5 7.7-8.3 10.9-6.3 6.9-9.3 12.3-8.7 15.8.4 2.7 2.2 4.4 7.7 7.5 2.1 1.1 4.9 3 6.2 4.2l2.5 2-1.6 2.9c-.8 1.6-2.1 3.8-2.8 4.9-1.2 1.8-1.2 2.1-.2 3.1.6.6 2.1 1.4 3.4 1.8 2.7.9 5.6 2.9 5.6 4.1 0 .4-.7 1.2-1.6 1.8-1.7 1.2-5.2 6.2-5.2 7.6 0 .5 1.4 2.5 3.1 4.5 4 4.6 4.3 6.5 2.1 13.1-.9 2.7-1.6 6.3-1.6 7.9 0 5.2 4 10.4 10.4 13.6 2.7 1.4 3.7 1.5 9.9 1.5 3.8 0 11.7-.6 17.4-1.2 11.1-1.3 25-1.6 27.5-.6.9.3 1.7 1.2 1.8 2 .2.8.5 7.1.7 14.2l.4 12.7h93.2l-.4-1.7c-.2-1-1.7-13.2-3.5-27.2l-3.1-25.5 1.4-6.1c2.4-9.9 8.7-21.4 25.1-45.1 4.7-6.9 7.5-12.6 9.6-20.2 1.5-5.5 1.9-27.4.6-36.2-5.4-36.8-36.1-66.1-76.1-72.7-5.4-1-21-1.7-25.7-1.2zm23.3 31.1c0 9.8-.1 11-1 11.7-.8.5-1.4.5-2.1 0-1-.6-1.1-2-1.3-11-.1-5.6 0-10.7.2-11.2s1-.7 2.3-.6l2 .2-.1 10.9h0zm-28.6-2.9c2.5 3.6 9.3 16 9.3 16.9 0 1.5-2.9 3.3-4.1 2.5-1.2-.7-10.6-16.8-10.6-18.2 0-1.3 1.7-2.9 3.1-2.9.6.1 1.6.8 2.3 1.7zm62.8-.6c.6.6 1.1 1.3 1.1 1.8 0 1.2-9.9 18.1-10.9 18.5-1.6.6-3.9-.9-3.9-2.5 0-1.4 8.8-17.4 10.1-18.3 1.2-.8 2.4-.6 3.6.5zM162 57.3c11.3 2.3 22.1 10.8 27.2 21.2 6.2 12.6 5.5 26.3-2 39.4-3.4 5.9-6.4 9.7-13.3 16.8l-5.4 5.6-.2 8.9c-.1 6.4-.4 9.2-1 9.9-.7.9-2.5 1-13.6 1h-12.8l-2.2-1.9-2.1-1.9v-9.1c0-5.5-.2-9.1-.6-9.1-1.3 0-8.9-7.9-12-12.6-6.7-10-9.8-19.3-9.8-29.4 0-11 3.8-19.9 11.8-27.9 9.8-9.8 22.8-13.6 36-10.9zm-52.8 5.3c5.2 3 6.5 4 6.5 5.2 0 1.5-2 3.6-3.2 3.3-1.7-.4-12.8-6.9-13.1-7.7-.5-1.4 1.5-4.4 2.9-4.4.2-.1 3.3 1.6 6.9 3.6zm96.9-2.4c1.8 2.6 1.3 3.3-5.3 7.2-3.5 2-6.8 3.7-7.4 3.7-1.6 0-3.3-2.9-2.5-4.2.7-1 12.3-8 13.5-8 .5 0 1.3.6 1.7 1.3zm-98.8 26c.4 1.5.3 2.3-.5 3.6-1 1.6-1.2 1.6-8 1.6-6.7 0-6.9-.1-7.9-1.5-1.2-1.7-1.2-3-.3-4.7.6-1.1 1.2-1.2 8.4-1l7.7.2.6 1.8zm107.5 1.5c.2.7.2 1.8 0 2.5-.4 1.2-.9 1.2-8.2 1.2-7.9 0-9.3-.4-9.3-2.5s1.4-2.5 9.3-2.5c7.3.1 7.8.1 8.2 1.3zm-51.2 80.7c0 3.7-1.1 6.4-3.2 7.9-1.6 1.2-11.5 1.4-13.4.4-1.9-1-3-3.9-3-8V165h19.6v3.4h0z">
        </path>
        <path fill-opacity="0" stroke="currentColor" stroke-dasharray="92,92" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M167.2 75.1c0 .9-.1 1.9-.4 2.4-.2.6.4 1.2 1.6 1.7 2.6 1.1 6.4 5.6 7.6 9 1.2 3.4 1.2 10.1.1 13.3-.5 1.3-1.6 3.4-2.5 4.7l-1.7 2.4 1.3 1.9c1.6 2.2 2 2 5.2-2.6 8-11.7 3.1-28.7-9.6-33.5-1.4-.7-1.6-.7-1.6.7z"></path>
        </svg>
    );
  }
  
  export function SkillIcon(props: Props) {
    return (
        <svg viewBox="0 0 256 256"  height={'2em'}><path stroke="currentColor" stroke-dasharray="1458,1458" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M130.1 10.2c-19 1.9-30.3 4.7-42.2 10.7-15.2 7.5-26.6 19-33.6 33.4-5 10.2-7.5 20.9-8.3 35.3-.6 10.8-2 16.1-5.7 22.2-1.7 2.8-5.5 7.7-8.3 10.9-6.3 6.9-9.3 12.3-8.7 15.8.4 2.7 2.2 4.4 7.7 7.5 2.1 1.1 4.9 3 6.2 4.2l2.5 2-1.6 2.9c-.8 1.6-2.1 3.8-2.8 4.9-1.2 1.8-1.2 2.1-.2 3.1.6.6 2.1 1.4 3.4 1.8 2.7.9 5.6 2.9 5.6 4.1 0 .4-.7 1.2-1.6 1.8-1.7 1.2-5.2 6.2-5.2 7.6 0 .5 1.4 2.5 3.1 4.5 4 4.6 4.3 6.5 2.1 13.1-.9 2.7-1.6 6.3-1.6 7.9 0 5.2 4 10.4 10.4 13.6 2.7 1.4 3.7 1.5 9.9 1.5 3.8 0 11.7-.6 17.4-1.2 11.1-1.3 25-1.6 27.5-.6.9.3 1.7 1.2 1.8 2 .2.8.5 7.1.7 14.2l.4 12.7h93.2l-.4-1.7c-.2-1-1.7-13.2-3.5-27.2l-3.1-25.5 1.4-6.1c2.4-9.9 8.7-21.4 25.1-45.1 4.7-6.9 7.5-12.6 9.6-20.2 1.5-5.5 1.9-27.4.6-36.2-5.4-36.8-36.1-66.1-76.1-72.7-5.4-1-21-1.7-25.7-1.2zm23.3 31.1c0 9.8-.1 11-1 11.7-.8.5-1.4.5-2.1 0-1-.6-1.1-2-1.3-11-.1-5.6 0-10.7.2-11.2s1-.7 2.3-.6l2 .2-.1 10.9h0zm-28.6-2.9c2.5 3.6 9.3 16 9.3 16.9 0 1.5-2.9 3.3-4.1 2.5-1.2-.7-10.6-16.8-10.6-18.2 0-1.3 1.7-2.9 3.1-2.9.6.1 1.6.8 2.3 1.7zm62.8-.6c.6.6 1.1 1.3 1.1 1.8 0 1.2-9.9 18.1-10.9 18.5-1.6.6-3.9-.9-3.9-2.5 0-1.4 8.8-17.4 10.1-18.3 1.2-.8 2.4-.6 3.6.5zM162 57.3c11.3 2.3 22.1 10.8 27.2 21.2 6.2 12.6 5.5 26.3-2 39.4-3.4 5.9-6.4 9.7-13.3 16.8l-5.4 5.6-.2 8.9c-.1 6.4-.4 9.2-1 9.9-.7.9-2.5 1-13.6 1h-12.8l-2.2-1.9-2.1-1.9v-9.1c0-5.5-.2-9.1-.6-9.1-1.3 0-8.9-7.9-12-12.6-6.7-10-9.8-19.3-9.8-29.4 0-11 3.8-19.9 11.8-27.9 9.8-9.8 22.8-13.6 36-10.9zm-52.8 5.3c5.2 3 6.5 4 6.5 5.2 0 1.5-2 3.6-3.2 3.3-1.7-.4-12.8-6.9-13.1-7.7-.5-1.4 1.5-4.4 2.9-4.4.2-.1 3.3 1.6 6.9 3.6zm96.9-2.4c1.8 2.6 1.3 3.3-5.3 7.2-3.5 2-6.8 3.7-7.4 3.7-1.6 0-3.3-2.9-2.5-4.2.7-1 12.3-8 13.5-8 .5 0 1.3.6 1.7 1.3zm-98.8 26c.4 1.5.3 2.3-.5 3.6-1 1.6-1.2 1.6-8 1.6-6.7 0-6.9-.1-7.9-1.5-1.2-1.7-1.2-3-.3-4.7.6-1.1 1.2-1.2 8.4-1l7.7.2.6 1.8zm107.5 1.5c.2.7.2 1.8 0 2.5-.4 1.2-.9 1.2-8.2 1.2-7.9 0-9.3-.4-9.3-2.5s1.4-2.5 9.3-2.5c7.3.1 7.8.1 8.2 1.3zm-51.2 80.7c0 3.7-1.1 6.4-3.2 7.9-1.6 1.2-11.5 1.4-13.4.4-1.9-1-3-3.9-3-8V165h19.6v3.4h0z"/><path stroke="#000" stroke-dasharray="92,92" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M167.2 75.1c0 .9-.1 1.9-.4 2.4-.2.6.4 1.2 1.6 1.7 2.6 1.1 6.4 5.6 7.6 9 1.2 3.4 1.2 10.1.1 13.3-.5 1.3-1.6 3.4-2.5 4.7l-1.7 2.4 1.3 1.9c1.6 2.2 2 2 5.2-2.6 8-11.7 3.1-28.7-9.6-33.5-1.4-.7-1.6-.7-1.6.7z"/></svg>
    );
  }
  
  export function GradeIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'}  viewBox="0 0 1024 1024" version="1.1"><path d="M511 724.7c-79.5 0-154.3-31-210.5-87.2-56.2-56.2-87.2-131-87.2-210.5s31-154.3 87.2-210.5 131-87.2 210.5-87.2 154.3 31 210.5 87.2 87.2 131 87.2 210.5-31 154.3-87.2 210.5c-56.2 56.3-131 87.2-210.5 87.2z m0-545.4c-136.6 0-247.7 111.1-247.7 247.7S374.4 674.7 511 674.7 758.7 563.6 758.7 427 647.6 179.3 511 179.3z"/><path d="M243 895.5l59.4-266 48.8 10.9L310.7 822l194.8-60.8 206.4 61.1L663 632.5l48.4-12.5 71 275.3-276.5-81.8zM512 268.8l46.9 94.9L663.7 379l-75.9 73.9 17.9 104.4L512 508l-93.7 49.3 17.9-104.4-75.9-73.9 104.8-15.3z"/></svg>
    
    );
  }
  
  export function PositionIcon(props: Props) {
    return (
      <svg  fillRule="evenodd" fill="currentColor" height={'2em'}  clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 1707 1707"><svg viewBox="0 -960 960 960"><path d="M160-200h160v-320H160v320zm240 0h160v-560H400v560zm240 0h160v-240H640v240zM80-120v-480h240v-240h320v320h240v400H80z"/></svg></svg>

    );
  }
  
  export function TeamIcon(props: Props) {
    return (
       <svg fill="currentColor" height={'2em'} viewBox="0 0 1024 1024" version="1.1"><path d="M720.416 928H303.584a94.496 94.496 0 0 1-77.504-39.68 94.464 94.464 0 0 1-13.12-86.08l14.88-44.736a138.752 138.752 0 0 1 114.144-93.312c44.736-5.472 110.56-12 170.016-12s125.248 6.528 169.984 12a138.656 138.656 0 0 1 114.112 93.28l0.032 0.032 14.912 44.768a94.496 94.496 0 0 1-13.152 86.048A94.432 94.432 0 0 1 720.416 928zM512 716.16c-56.224 0-119.232 6.272-162.176 11.552a74.4 74.4 0 0 0-61.248 50.016l-14.88 44.736a31.168 31.168 0 0 0 4.288 28.416c6.016 8.32 15.328 13.12 25.6 13.12h416.8c10.24 0 19.584-4.768 25.6-13.12a31.296 31.296 0 0 0 4.352-28.416l-14.912-44.736a74.304 74.304 0 0 0-61.248-50.016c-42.944-5.28-105.952-11.552-162.176-11.552zM512 620.608c-105.248 0-190.88-85.632-190.88-190.88S406.752 238.848 512 238.848s190.88 85.632 190.88 190.88-85.632 190.88-190.88 190.88z m0-317.76c-69.984 0-126.88 56.928-126.88 126.88s56.896 126.88 126.88 126.88 126.88-56.928 126.88-126.88S581.984 302.848 512 302.848zM839.136 703.904a32 32 0 1 1 0-64h71.776a25.824 25.824 0 0 0 21.152-10.848 25.792 25.792 0 0 0 3.584-23.488l-13.664-40.896a65.216 65.216 0 0 0-53.696-43.872 1528.064 1528.064 0 0 0-93.056-8.704 31.968 31.968 0 0 1-30.016-33.856 32.064 32.064 0 0 1 33.856-30.016c30.112 1.824 62.752 4.832 97.024 9.056a129.472 129.472 0 0 1 106.592 87.136l13.664 40.896c9.28 27.808 4.768 57.408-12.352 81.184a89.024 89.024 0 0 1-73.088 37.44l-71.776-0.032zM777.152 408.64a32 32 0 0 1-12.576-61.44 113.12 113.12 0 0 0 68.896-104.288 112.32 112.32 0 0 0-33.184-80.064 112.512 112.512 0 0 0-80.064-33.152h-0.032a113.984 113.984 0 0 0-105.92 73.12 32 32 0 1 1-59.808-22.688 178.24 178.24 0 0 1 165.696-114.432h0.064c47.328 0 91.84 18.432 125.312 51.872a176 176 0 0 1 51.936 125.344 177.088 177.088 0 0 1-107.776 163.2 32.64 32.64 0 0 1-12.544 2.528zM120.16 704a89.184 89.184 0 0 1-73.056-37.376 89.28 89.28 0 0 1-12.416-81.184l13.632-40.928a129.536 129.536 0 0 1 106.592-87.2 1606.496 1606.496 0 0 1 96.992-9.12 32.128 32.128 0 0 1 33.888 30.016 32.064 32.064 0 0 1-30.016 33.888 1501.44 1501.44 0 0 0-93.056 8.768 65.152 65.152 0 0 0-53.664 43.872l-13.632 40.928a25.92 25.92 0 0 0 3.552 23.52 25.92 25.92 0 0 0 21.184 10.816H192a32 32 0 1 1 0 64H120.16zM253.824 408.672c-4.192 0-8.448-0.832-12.544-2.56a177.056 177.056 0 0 1-107.936-163.104 176.064 176.064 0 0 1 51.872-125.376 176.16 176.16 0 0 1 125.344-51.936h0.032a178.304 178.304 0 0 1 165.792 114.4 32 32 0 1 1-59.808 22.72 113.984 113.984 0 0 0-105.984-73.12h-0.032c-30.24 0-58.688 11.808-80.064 33.216a112.32 112.32 0 0 0-33.152 80.064 113.184 113.184 0 0 0 68.992 104.256 32 32 0 0 1-12.512 61.44z"/></svg>
  
    );
  }
  
  export function LogOutIcon(props: Props) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
  </svg>
  
    );
  }



    
  export function RulesIcon(props: Props) {
    return (
       
<svg fillRule="evenodd" fill="currentColor" height={'2em'} clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 512 512"><path d="M451 477H197c-1 0-3 0-4-1l-98-68c-2-1-3-4-3-6V7c0-4 3-7 7-7h352c4 0 7 3 7 7v463c0 4-3 7-7 7zm-252-14h245V14H106v384l93 65z" className="fil0"/><path d="M197 477c-4 0-7-3-7-7v-61H99c-4 0-7-3-7-7s3-7 7-7h98c4 0 7 3 7 7v68c0 4-3 7-7 7zM218 373h-84c-4 0-7-3-7-7v-84c0-4 3-7 7-7h84c4 0 7 3 7 7v84c0 4-3 7-7 7zm-77-14h70v-70h-70v70zM416 69H238c-4 0-7-3-7-7s3-7 7-7h178c4 0 7 3 7 7s-3 7-7 7zM416 105H238c-4 0-7-4-7-7 0-4 3-7 7-7h178c4 0 7 3 7 7 0 3-3 7-7 7zM416 191H238c-4 0-7-3-7-7s3-7 7-7h178c4 0 7 3 7 7s-3 7-7 7zM416 226H238c-4 0-7-3-7-7 0-3 3-7 7-7h178c4 0 7 4 7 7 0 4-3 7-7 7zM416 313H238c-4 0-7-3-7-7s3-7 7-7h178c4 0 7 3 7 7s-3 7-7 7zM416 348H238c-4 0-7-3-7-7 0-3 3-7 7-7h178c4 0 7 4 7 7 0 4-3 7-7 7z" className="fil0"/><path d="M158 349c-2 0-4-1-5-2-3-3-3-7 0-10l36-36c3-3 7-3 10 0 2 2 2 7 0 10l-36 36c-2 1-4 2-5 2z" className="fil0"/><path d="M194 349c-2 0-4-1-5-2l-36-36c-3-3-3-8 0-10 2-3 7-3 10 0l36 36c2 3 2 7 0 10-2 1-3 2-5 2z" className="fil0"/><g><path d="M218 251h-84c-4 0-7-3-7-7v-84c0-4 3-7 7-7h84c4 0 7 3 7 7v84c0 4-3 7-7 7zm-77-14h70v-70h-70v70z" className="fil0"/></g><g><path d="M218 129h-84c-4 0-7-3-7-7V38c0-4 3-7 7-7h84c4 0 7 3 7 7v84c0 4-3 7-7 7zm-77-14h70V45h-70v70z" className="fil0"/></g><g><path d="M155 110h-1c-3-1-5-3-5-5l-7-23c-1-4 2-8 5-9 4-1 8 1 9 5l3 12 38-38c3-3 7-3 10 0 3 2 3 7 0 9l-47 47c-1 2-3 2-5 2z" className="fil0"/></g><g><path d="M155 232h-1c-3-1-5-3-5-5l-7-23c-1-4 2-8 5-9 4-1 8 1 9 5l3 12 38-39c3-2 7-2 10 0 3 3 3 8 0 10l-47 47c-1 1-3 2-5 2z" className="fil0"/></g><g><path d="M451 512H61c-4 0-7-3-7-7V45c0-4 3-7 7-7h38c4 0 7 3 7 7s-3 7-7 7H68v446h376v-28c0-4 3-7 7-7s7 3 7 7v35c0 4-3 7-7 7z" className="fil0"/></g></svg>
    );
  }


    export function ProgramsIcon(props: Props) {
    return (
     <svg fill="currentColor" height={'2em'} viewBox="0 0 256 256"><svg viewBox="0 0 512 513"><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="15" d="M237.092 279.799c-1.334-12.836 1.018-26.194 7.555-38.433l32.508-60.863c17.433-32.639 58.025-44.966 90.664-27.533h0c32.639 17.433 44.966 58.025 27.533 90.664l-32.508 60.863M277.06 192.356l28.878 7.488m-42.07 17.21l28.878 7.488m-42.069 17.21l28.878 7.488m83.065-11.185l-22.282-19.837m9.091 44.535l-22.282-19.837m9.09 44.535l-22.282-19.837" className="colorStroke333 svgStroke"/><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="15" d="M341.663 169.043s11.187-16.699 29.797-13.336m-4.218 26.998s13.381-13.075 25.485-6.703M434.746 315.5c-65.368 29-98.052 14-163.421-8-70.658-23.78-131.825 36-131.825 36l22 58s37.156-45 89-40c58.489 5.641 99 47 155 21l29.246-67zM187.127 435.614l10.609 42.14s22.321-44.475 89.827-12.202c68.334 32.67 109.031 11.818 109.031 11.818L362.5 459.5l35.456-29.222s-49.796 17.713-88.928.081c-44.587-20.091-78.528-34.859-121.901 5.255zM156.5 305.5l2.447-21.538-63.734-27.975 68.005-14.83 6.911-69.259 35.119 60.094L222.5 228.5m-61 173l26 3m10.254 73.255l41.189 10.791m230.955-260.497l3.118 22.737 20.497 10.321-20.66 9.992-3.483 22.684-15.886-16.562-22.65 3.698 10.842-20.227-10.516-20.399 22.587 4.061zM403 54v9.036m0 33.928V106m-26-26h9.036m33.928 0H429M58 300v9.036m0 33.928V352m-26-26h9.036m33.928 0H84" className="colorStroke333 svgStroke"/><circle cx="450.25" cy="178.75" r="11.75" className="color333 svgShape"/><circle cx="107.25" cy="401.75" r="11.75" className="color333 svgShape"/><path stroke="#333" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="15" d="M118.815 46.946l-2.415-5.04m38.665 80.693l-23.788-49.645M20.504 144.487l-3.735-2.423m66.826 43.354l-40.426-26.143M261.725 27.572l.597-4.837m-9.834 83.937l6.546-53.07" className="colorStroke333 svgStroke" clipRule="evenodd"/></svg></svg>
    );
  }

  export function JudgesIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'}  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 100.75 100.75" >
  <path d="M93.424,44.205l-13.71-29.184c-0.093-0.205-0.247-0.387-0.412-0.527c-0.263-0.231-0.598-0.368-0.976-0.368H58.007  c-0.676-2.862-3.231-5-6.279-5c-3.048,0-5.604,2.138-6.279,5H25.073c-0.65,0-1.198,0.415-1.406,0.993  c-0.165,0.14-0.31,0.306-0.403,0.511L9.554,44.814c0,0-0.304,0.514-0.304,1.058c0,9.307,7.178,16.878,16,16.878s16-7.571,16-16.878  c0-0.481-0.047-0.622-0.425-1.336l-14.083-27.41h18.706c0.559,2.367,2.404,4.232,4.751,4.808v56.192H35.92  c-0.829,0-1.5,0.671-1.5,1.5v7c0,0.829,0.671,1.5,1.5,1.5h31.744c0.829,0,1.5-0.671,1.5-1.5v-7c0-0.829-0.671-1.5-1.5-1.5H53.2  V21.949c2.374-0.56,4.245-2.437,4.808-4.823h17.898L62.153,43.927c-0.378,0.714-0.425,0.855-0.425,1.336  c0,9.307,7.178,16.878,16,16.878c8.822,0,16-7.571,16-16.878C93.728,44.719,93.424,44.205,93.424,44.205z M25.25,59.749  c-6.693,0-12.222-5.429-12.925-12.378h25.85C37.472,54.321,31.943,59.749,25.25,59.749z M37.391,44.372l-24.484,0.316l11.787-24.951  L37.391,44.372z M66.164,81.125v4H37.42v-4H66.164z M55.159,15.914c-0.148,1.793-1.621,3.211-3.431,3.211  c-1.908,0-3.46-1.57-3.46-3.5s1.552-3.5,3.46-3.5c1.81,0,3.283,1.418,3.431,3.211c-0.018,0.094-0.029,0.19-0.029,0.289  S55.141,15.821,55.159,15.914z M78.285,19.128l11.787,24.951l-24.484-0.316L78.285,19.128z M77.728,59.14  c-6.693,0-12.222-5.428-12.925-12.378h25.85C89.95,53.711,84.421,59.14,77.728,59.14z"/>
  </svg>
    
    );
  }

  export function ResultIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'}  fillRule="evenodd" clipRule="evenodd" imageRendering="optimizeQuality" shapeRendering="geometricPrecision" textRendering="geometricPrecision" viewBox="0 0 7111 7111"><defs></defs><g id="Layer_x0020_1"><g id="_329469808"><path d="M2904 5210h-12c-617-2-1195-247-1630-685-895-906-887-2370 18-3267 905-896 2371-887 3267 18 434 439 670 1020 668 1637-3 616-248 1195-686 1630-436 430-1012 667-1625 667zM1416 1397c-829 820-837 2163-17 2992 398 401 928 624 1493 627h12c561 0 1089-216 1487-611 402-397 625-927 628-1492s-214-1097-611-1500c-822-829-2163-835-2992-16z"/><path d="M6395 7110c-163 0-327-57-460-192L4418 5374c-536 328-1172 474-1801 413-665-66-1291-363-1765-835C305 4404 4 3676 4 2902c0-775 301-1503 848-2051C1401 303 2128 1 2903 1s1502 302 2051 849c476 476 773 1108 835 1777 60 634-91 1274-427 1810l1519 1544c150 151 227 322 226 494-3 152-68 300-186 417-135 133-329 218-526 218zM4432 5154c25 0 50 9 69 29l1573 1599c210 211 532 150 711-28 69-69 272-319-42-636L5169 4519c-32-33-38-83-11-122 709-1068 565-2501-342-3410C3761-67 2045-67 990 987-64 2042-64 3758 990 4813c521 521 1217 790 1919 790 509 0 1021-143 1470-434 16-11 35-15 53-15z"/><path d="M4625 3574H1181c-54 0-97-43-97-98 0-54 43-97 97-97h3444c54 0 97 43 97 97 0 55-45 98-97 98z"/><path d="M2089 3574h-613c-54 0-97-43-97-98V2362c0-55 43-98 97-98h613c55 0 98 43 98 98v1114c0 53-43 98-98 98zm-516-195h419v-920h-419v920zM3210 3572h-614c-54 0-97-43-97-97V1663c0-54 43-97 97-97h614c54 0 97 43 97 97v1812c0 54-43 97-97 97zm-517-194h420V1760h-420v1618zM4332 3574h-614c-54 0-97-43-97-98V2008c0-55 43-98 97-98h614c54 0 97 43 97 98v1468c0 53-45 98-97 98zm-518-195h419V2105h-419v1274z"/><g><path d="M4255 3969H1551c-54 0-97-43-97-97s43-97 97-97h2704c54 0 97 43 97 97s-43 97-97 97z"/></g></g></g></svg>
    
    );
  }

  export function CandidateListIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'} viewBox="0 -960 960 960"><path d="M640-400q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35zM400-160v-76q0-21 10-40t28-30q45-27 95.5-40.5T640-360q56 0 106.5 13.5T842-306q18 11 28 30t10 40v76H400zm86-80h308q-35-20-74-30t-80-10q-41 0-80 10t-74 30zm154-240q17 0 28.5-11.5T680-520q0-17-11.5-28.5T640-560q-17 0-28.5 11.5T600-520q0 17 11.5 28.5T640-480zm0-40zm0 280zM120-400v-80h320v80H120zm0-320v-80h480v80H120zm324 160H120v-80h360q-14 17-22.5 37T444-560z"/></svg>
    
    );
  }

  export function ProgramListIcon(props: Props) {
    return (
      <svg fill="currentColor" height={'2em'} viewBox="0 0 512 512"><path d="M358.4 204.8c0 7.1-5.7 12.8-12.8 12.8h-128c-7.1 0-12.8-5.7-12.8-12.8s5.7-12.8 12.8-12.8h128c7.1 0 12.8 5.7 12.8 12.8zm-192-12.8c-7.1 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8 12.8-5.7 12.8-12.8-5.7-12.8-12.8-12.8zm179.2 51.2h-128c-7.1 0-12.8 5.7-12.8 12.8 0 7.1 5.7 12.8 12.8 12.8h128c7.1 0 12.8-5.7 12.8-12.8 0-7.1-5.7-12.8-12.8-12.8zm-179.2 0c-7.1 0-12.8 5.7-12.8 12.8 0 7.1 5.7 12.8 12.8 12.8 7.1 0 12.8-5.7 12.8-12.8 0-7.1-5.7-12.8-12.8-12.8zm179.2 51.2h-128c-7.1 0-12.8 5.7-12.8 12.8 0 7.1 5.7 12.8 12.8 12.8h128c7.1 0 12.8-5.7 12.8-12.8 0-7.1-5.7-12.8-12.8-12.8zm-179.2 0c-7.1 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8 12.8-5.7 12.8-12.8c0-7.1-5.7-12.8-12.8-12.8zm179.2 51.2h-128c-7.1 0-12.8 5.7-12.8 12.8 0 7.1 5.7 12.8 12.8 12.8h128c7.1 0 12.8-5.7 12.8-12.8 0-7.1-5.7-12.8-12.8-12.8zm-179.2 0c-7.1 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8 12.8-5.7 12.8-12.8c0-7.1-5.7-12.8-12.8-12.8zm179.2 51.2h-128c-7.1 0-12.8 5.7-12.8 12.8 0 7.1 5.7 12.8 12.8 12.8h128c7.1 0 12.8-5.7 12.8-12.8 0-7.1-5.7-12.8-12.8-12.8zm-179.2 0c-7.1 0-12.8 5.7-12.8 12.8s5.7 12.8 12.8 12.8 12.8-5.7 12.8-12.8c0-7.1-5.7-12.8-12.8-12.8zm294.4-294.4V448c-.1 35.3-28.7 63.9-64 64H115.2c-35.3-.1-63.9-28.7-64-64V102.4c.1-35.3 28.7-63.9 64-64H173c6-8 15.4-12.8 25.4-12.8h21.4c7-20 28.9-30.5 48.9-23.4 11 3.9 19.6 12.5 23.4 23.4h21.4c10 0 19.4 4.8 25.4 12.8h57.8c35.4.1 64 28.7 64.1 64zm-217.6-64c0 7.1 5.7 12.8 12.8 12.8 7.1 0 12.8-5.7 12.8-12.8s-5.7-12.8-12.8-12.8c-7.1 0-12.8 5.7-12.8 12.8zM192 96c0 3.5 2.9 6.4 6.4 6.4h115.2c3.5 0 6.4-2.9 6.4-6.4V57.6c0-3.5-2.9-6.4-6.4-6.4h-21.4c-7 20-28.9 30.5-48.9 23.4-11-3.9-19.6-12.5-23.4-23.4h-21.4c-3.5 0-6.4 2.9-6.4 6.4V96zm243.2 6.4c0-21.2-17.2-38.4-38.4-38.4h-51.2v32c0 17.7-14.3 32-32 32H198.4c-17.7 0-32-14.3-32-32V64h-51.2C94 64 76.8 81.2 76.8 102.4V448c0 21.2 17.2 38.4 38.4 38.4h281.6c21.2 0 38.4-17.2 38.4-38.4V102.4z"/></svg>
    );
  }

  export function TeamListIcon(props: Props) {
    return (
     <svg fill="currentColor" height={'2em'}  version="1.1" id="Layer_1" x="0px" y="0px" viewBox="0 0 106.86 122.88"  ><g><path className="st0" d="M39.62,64.58c-1.46,0-2.64-1.41-2.64-3.14c0-1.74,1.18-3.14,2.64-3.14h34.89c1.46,0,2.64,1.41,2.64,3.14 c0,1.74-1.18,3.14-2.64,3.14H39.62L39.62,64.58z M46.77,116.58c1.74,0,3.15,1.41,3.15,3.15c0,1.74-1.41,3.15-3.15,3.15H7.33 c-2.02,0-3.85-0.82-5.18-2.15C0.82,119.4,0,117.57,0,115.55V7.33c0-2.02,0.82-3.85,2.15-5.18C3.48,0.82,5.31,0,7.33,0h90.02 c2.02,0,3.85,0.83,5.18,2.15c1.33,1.33,2.15,3.16,2.15,5.18v50.14c0,1.74-1.41,3.15-3.15,3.15c-1.74,0-3.15-1.41-3.15-3.15V7.33 c0-0.28-0.12-0.54-0.31-0.72c-0.19-0.19-0.44-0.31-0.72-0.31H7.33c-0.28,0-0.54,0.12-0.73,0.3C6.42,6.8,6.3,7.05,6.3,7.33v108.21 c0,0.28,0.12,0.54,0.3,0.72c0.19,0.19,0.45,0.31,0.73,0.31H46.77L46.77,116.58z M98.7,74.34c-0.51-0.49-1.1-0.72-1.78-0.71 c-0.68,0.01-1.26,0.27-1.74,0.78l-3.91,4.07l10.97,10.59l3.95-4.11c0.47-0.48,0.67-1.1,0.66-1.78c-0.01-0.67-0.25-1.28-0.73-1.74 L98.7,74.34L98.7,74.34z M78.21,114.01c-1.45,0.46-2.89,0.94-4.33,1.41c-1.45,0.48-2.89,0.97-4.33,1.45 c-3.41,1.12-5.32,1.74-5.72,1.85c-0.39,0.12-0.16-1.48,0.7-4.81l2.71-10.45l0,0l20.55-21.38l10.96,10.55L78.21,114.01L78.21,114.01 z M39.62,86.95c-1.46,0-2.65-1.43-2.65-3.19c0-1.76,1.19-3.19,2.65-3.19h17.19c1.46,0,2.65,1.43,2.65,3.19 c0,1.76-1.19,3.19-2.65,3.19H39.62L39.62,86.95z M39.62,42.26c-1.46,0-2.64-1.41-2.64-3.14c0-1.74,1.18-3.14,2.64-3.14h34.89 c1.46,0,2.64,1.41,2.64,3.14c0,1.74-1.18,3.14-2.64,3.14H39.62L39.62,42.26z M24.48,79.46c2.06,0,3.72,1.67,3.72,3.72 c0,2.06-1.67,3.72-3.72,3.72c-2.06,0-3.72-1.67-3.72-3.72C20.76,81.13,22.43,79.46,24.48,79.46L24.48,79.46z M24.48,57.44 c2.06,0,3.72,1.67,3.72,3.72c0,2.06-1.67,3.72-3.72,3.72c-2.06,0-3.72-1.67-3.72-3.72C20.76,59.11,22.43,57.44,24.48,57.44 L24.48,57.44z M24.48,35.42c2.06,0,3.72,1.67,3.72,3.72c0,2.06-1.67,3.72-3.72,3.72c-2.06,0-3.72-1.67-3.72-3.72 C20.76,37.08,22.43,35.42,24.48,35.42L24.48,35.42z"/></g></svg>
    );
  }

  //     
   

  
  
   
    
  