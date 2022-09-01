// This is the important part!

function collapseSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
  
    // temporarily disable all css transitions
    var elementTransition = element.style.transition;
    element.style.transition = '';
  
    // on the next frame (as soon as the previous style change has taken effect),
    // explicitly set the element's height to its current pixel height, so we 
    // aren't transitioning out of 'auto'
    requestAnimationFrame(function() {
      element.style.height = sectionHeight + 'px';
      element.style.transition = elementTransition;
  
      // on the next frame (as soon as the previous style change has taken effect),
      // have the element transition to height: 0
      requestAnimationFrame(function() {
        element.style.height = 0 + 'px';
      });
    });
  
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }
  
  function collapseRow(element, og_width) {
    var elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(function() {
      element.style.width = '100%';
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.style.width = og_width + 'px';
        element.style.paddingTop = null;
      });
    });
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }
  
  function expandSection(element) {
    // get the height of the element's inner content, regardless of its actual size
    var sectionHeight = element.scrollHeight;
  
    // have the element transition to the height of its inner content
    element.style.height = sectionHeight + 'px';
  
    // mark the section as "currently not collapsed"
    element.setAttribute('data-collapsed', 'false');
  }
  
  function expandRow(element, og_width) {
    var elementTransition = element.style.transition;
    element.style.transition = '';
    requestAnimationFrame(function() {
      element.style.width = og_width + 'px';
      element.style.transition = elementTransition;
      requestAnimationFrame(function() {
        element.style.width = '100%';
        element.style.paddingTop = '10px'
      });
    });
    // mark the section as "currently collapsed"
    element.setAttribute('data-collapsed', 'true');
  }
  
  
  function expand(event) {
    var tarjeta = event.target
    var header = tarjeta.querySelector('.row');
    var section = tarjeta.querySelector('.extra_info');
    var idx = tarjetas_array.indexOf(tarjeta)
    let og_width_ = og_widths_array[idx]
  
    var isCollapsed = section.getAttribute('data-collapsed') === 'true';
    //section.style.border="2px dotted pink"
    if (isCollapsed) {
      expandSection(section)
      expandRow(header, og_width_)
    }
  }
  
  function collapse(event) {
    var tarjeta = event.target
    var header = tarjeta.querySelector('.row');
    var section = tarjeta.querySelector('.extra_info');
  
    var idx = tarjetas_array.indexOf(tarjeta)
    let og_width_ = og_widths_array[idx]
  
    var isCollapsed = section.getAttribute('data-collapsed') === 'true';
    //section.style.border="2px dotted pink"
    if (!(isCollapsed)) {
      collapseSection(section)
      collapseRow(header, og_width_)
    }
  }
  
  var tarjetas_array = [...document.querySelectorAll('.tarjeta_item')]
  var header_array = document.querySelectorAll('.row');
  var section_array = document.querySelectorAll('.extra_info');
  var og_widths_array = [];
  for (var i = 0, len = tarjetas_array.length; i < len; i++) {
    tarjetas_array[i].addEventListener('mouseenter', expand)
    tarjetas_array[i].addEventListener('touchenter', expand)

    tarjetas_array[i].addEventListener('mouseleave', collapse)
    tarjetas_array[i].addEventListener('touchleave', collapse)
    
    //+5 so text does not collapse
    og_widths_array.push(header_array[i].scrollWidth + 5)
  
    header_array[i].setAttribute('data-collapsed', 'true');
  
    section_array[i].style.height = '0px';
    section_array[i].setAttribute('data-collapsed', 'true');
  }

  //stick footer to bottom side
  footer = document.querySelector('footer');
  footer_h = footer.getAttribute.scrollHeight;
  footer.setAttribute('height', footer_h);
