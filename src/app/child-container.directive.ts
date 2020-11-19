import { Directive, Input, TemplateRef } from "@angular/core";

/**
 * Directive to get child containers from parent component
 */
@Directive({
  selector: "[appChildContainer]"
})
export class ChildContainerDirective {
  @Input("appChildContainer")
  public containerName: string;

  constructor(public templateRef: TemplateRef<any>) {}
}
